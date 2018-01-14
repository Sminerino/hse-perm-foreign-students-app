import React from 'react';
import { View, Image, TouchableNativeFeedback, Text } from 'react-native';
import SettingsTileStyles from './SettingsTileStyles';

export default class SettingsTile extends React.Component {
    render() {
        return <TouchableNativeFeedback onPress={this.props.onPress}>
            <View style={SettingsTileStyles.container}>
                <Image
                    source={this.props.icon}
                    style={SettingsTileStyles.icon}
                />
                <View style={SettingsTileStyles.text}>
                    <Text style={SettingsTileStyles.title}>
                        {this.props.text}
                    </Text>
                    <Text style={SettingsTileStyles.current}>
                        {this.props.currentSettingText}
                    </Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    }
}

