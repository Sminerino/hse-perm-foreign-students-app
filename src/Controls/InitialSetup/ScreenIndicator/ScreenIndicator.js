import React from 'react';
import { View, StyleSheet } from 'react-native';

export class ScreenIndicator extends React.PureComponent {
    render() {
        let dotsArray = [];
        for(let i = 0; i < this.props.count; i++) {
            dotsArray.push(this.renderDot(i));
        }
        return <View style={styles.container}>
            {dotsArray}
        </View>
    }
    renderDot(index) {
        return (
            <View
                style={index === this.props.current ? styles.dot : styles.dotCurrent}
                key={index}
            />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    dot: {
        margin: 5,
        height: 30,
        width: 30,
        borderRadius: 500,
        backgroundColor: 'blue',
    },
    dotCurrent: {
        margin: 5,
        height: 30,
        width: 30,
        borderRadius: 500,
        backgroundColor: 'red',
    }
});