import React from 'react';

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  Easing,
  InteractionManager
} from 'react-native';

class SelectPicker extends React.Component {
  constructor (props) {
    super(props);
    this.scrollY = 0;
    this.scrollYMAX = 0;
    this.scrollYMIN = 0;
    this.LastTimestamp = -1;

    this.state = {
      animateValue: new Animated.Value(0)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.defaultValue != nextProps.defaultValue) {
      this.scrollToItem(nextProps.defaultValue)
    }
  }

  componentWillMount () {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        return true;
      },
      onStartShouldSetPanResponderCapture: (evt, gestureState) => {
        return true;        
      },
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return true;        
      },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        return true;        
      },
      onPanResponderMove: (evt, gestureState) => {
        this._onMoving(gestureState);
        this.LastTimestamp = evt.nativeEvent.timestamp;
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        this._onScrollEnd(gestureState, evt.nativeEvent.timestamp);
      }
    });
  }

  _scrollTo = ({
    y
  }) => {
    Animated.timing(
      this.state.animateValue,
      {
        toValue: y,
        duration: 0,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start();
  }

  componentDidMount () {
    requestAnimationFrame(() => {
      this.scrollToItem(this.props.defaultValue);
    });
  }

  /* 获取做大的滚动 Y 值 */
  getMinScrollY = () => {
    let {itemHeight, wrapHeight, data} = this.props;
    /* 内容顶部留白 */
    let topSpace = (wrapHeight - itemHeight ) / 2;
    /* 计算 Y 的最大值 */
    return - (data.length -1 ) * itemHeight;
  }

  /* onMoving */
  _onMoving = (gestureState) => {
    let scrollY = this.scrollY + (gestureState.moveY - gestureState.y0);

    /* 判断 滚动的Y值 是否合法 */
    let minY = this.getMinScrollY();
    if (scrollY > 0 ) {
      scrollY = 0;
    }

    if (scrollY < minY) {
      scrollY = minY;
    }

    this._scrollTo({
      x: 0,
      y: scrollY,
      animated: false
    });
  }

  /* 获取 滚动 Y 值，刚好对齐整个元素位置 */
  getScrollYByCompelteItem = (y) => {
    let {itemHeight} = this.props;

    let index =  Math.abs(parseInt(y / itemHeight));
    let restPx = Math.abs(y % itemHeight);

    if (restPx > (itemHeight / 2)) {
      index++
    }

    return {
      y: - itemHeight * index,
      index: index
    };
  }

  /* 一次滚动结束时 */
  _onScrollEnd = (gestureState, endTimestamp) => {
    let scrollY = this.scrollY + (gestureState.moveY - gestureState.y0);
    if (this.LastTimestamp > 0) {
      let speedY = scrollY + gestureState.vy * (endTimestamp - this.LastTimestamp) * 10;
      scrollY = speedY;
    }

    if (gestureState.moveY == 0 ){
      scrollY = this.scrollY;
    }

    /* 判断 滚动的Y值 是否合法 */
    let minY = this.getMinScrollY();
    if (scrollY > 0 ) {
      scrollY = 0;
    }

    if (scrollY < minY) {
      scrollY = minY;
    }


    /* 定位到整个元素 */
    let resObj = this.getScrollYByCompelteItem(scrollY);

    scrollY = resObj.y;
    this.scrollY = scrollY;
    Animated.timing(
      this.state.animateValue,
      {
        toValue: scrollY,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true
      }
    ).start();

    this.LastTimestamp = -1;
    /* 解决性能问题 */
    requestAnimationFrame(() => {
      this.props.onValueChange(this.props.data[resObj.index].value, resObj.index);
    });
  }

  /* 滚动到某一个元素 */
  scrollToItem = (value) => {
    let index = 0;
    let {data, itemHeight} = this.props;
    for (let i = 0; i < data.length; i++) {
      if (value === data[i]) {
        index = i;
        break;
      }
    }

    this._scrollTo({
      x: 0,
      y: - itemHeight * index,
      animated: false
    });

    this.scrollY = - itemHeight * index;
  }

  componentDidUpdate () {

    this.scrollToNomalPx();
  }

  /* 滚动到合法值 */
  scrollToNomalPx = () => {
    scrollY = this.scrollY;
    /* 判断 滚动的Y值 是否合法 */
    let minY = this.getMinScrollY();
    if (scrollY > 0 ) {
      scrollY = 0;
    }

    if (scrollY < minY) {
      scrollY = minY;
    }

    /* 定位到整个元素 */
    let resObj = this.getScrollYByCompelteItem(scrollY);

    scrollY = resObj.y;
    if (scrollY === this.scrollY) {
      return;
    }

    this.scrollY = scrollY;
    Animated.timing(
      this.state.animateValue,
      {
        toValue: scrollY,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true
      }
    ).start();

    InteractionManager.runAfterInteractions(() => {
      this.props.onValueChange(this.props.data[resObj.index].value, resObj.index);
    });   
  }

  render () {
    let {wrapHeight, wrapWidth, itemHeight, data, fontColor, fontSize, wrapStyle, maskercolor, borderStyle} = this.props;
    let maskItemHeight = (wrapHeight - itemHeight) / 2;

    return (
      <View style={[styles.wrap, {height: wrapHeight, width: wrapWidth}, wrapStyle]}>

        <Animated.View
          style={[{
            overflow: 'hidden',
            transform:[{translateY: this.state.animateValue}]
          }]}

        >
          <View style={{height: maskItemHeight, width: wrapWidth}} ></View>
          {
            data.map((item, index) => {
              return <Item fontSize={fontSize} fontColor={fontColor} style={{alignItems: 'center', justifyContent: 'center' ,height: itemHeight, width: wrapWidth}} item={item} key={index} />
            })
          }
          <View style={{height: maskItemHeight , width: wrapWidth}} ></View>          
        </Animated.View>

        <View style={[styles.masker]} {...this._panResponder.panHandlers}>

          <View style={[styles.topItem, {height: maskItemHeight, width: wrapWidth, backgroundColor: maskercolor}, borderStyle]}></View>

          <View style={[styles.bottomItem,{height: maskItemHeight, width: wrapWidth, backgroundColor: maskercolor}, borderStyle]}></View>

        </View>
      </View>
    )
  }
}

class Item extends React.Component {
  render () {
    let {item, style, fontColor, fontSize} = this.props;
    return (
      <View style={style}>
        <Text style={{ textAlign: 'center', color: fontColor, fontSize:  fontSize, fontWeight: 'bold'}}>{item.label}</Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
    wrap: {
      height: 100,
      width: 50,
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'transparent'
    },
    scrollContainer: {
      alignItems: 'center' ,
      justifyContent: 'center'
    },
    masker: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'transparent'
    },
    topItem: {
      flex: 1,
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      borderBottomColor: 'rgba(0,0,0,0.2)',
      borderBottomWidth: 1,
    },
    bottomItem: {
      right: 0,
      left: 0,
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderTopWidth: 1,
      borderTopColor: 'rgba(0,0,0,0.2)'
    }
});

SelectPicker.defaultProps = {
  wrapHeight: 300,
  wrapWidth: null,
  itemHeight: 100,
  data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
  fontColor: '#444',
  fontSize: 18,
  defaultValue:'',
  wrapStyle:{},
  borderStyle: {},
  maskercolor: 'rgba(255, 255, 255, 0.5)',
  onValueChange: function (item, index) {},
}

export default SelectPicker;