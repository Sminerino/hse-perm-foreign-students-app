import React from 'react';
import { View, Image, TouchableNativeFeedback, Text } from 'react-native';
import SettingsTileStyles from './SettingsTileStyles';

export const SettingsTile = (props) =>
    <TouchableNativeFeedback onPress={props.onPress}>
        <View style={SettingsTileStyles.container}>
            <Image
                source={props.icon}
                style={SettingsTileStyles.icon}
            />
            <View style={SettingsTileStyles.text}>
                <Text style={SettingsTileStyles.title}>
                    {props.text}
                </Text>
                <Text style={SettingsTileStyles.current}>
                    {props.currentSettingText}
                </Text>
            </View>
        </View>
    </TouchableNativeFeedback>;

