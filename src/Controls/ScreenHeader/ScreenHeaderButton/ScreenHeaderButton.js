import React from 'react';
import { View, TouchableNativeFeedback, Image} from 'react-native';
import ScreenHeaderButtonStyles from './ScreenHeaderButtonStyles';

export default class ScreenHeaderButton extends React.Component {
    render(){
        return(
            <TouchableNativeFeedback onPress={this.props.onPress}>
                <View style={ScreenHeaderButtonStyles.container}>
                    <Image
                        style={ScreenHeaderButtonStyles.icon}
                        source={this.props.icon}
                    />
                </View>
            </TouchableNativeFeedback>
        );
    }
}