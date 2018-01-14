import React from 'react';
import {View, Image, Text, TouchableNativeFeedback} from 'react-native';
import ScreenHeaderButton from './ScreenHeaderButton/ScreenHeaderButton';
import ScreenHeaderStyles from './ScreenHeaderStyles';

export class ScreenHeader extends React.Component {
    render() {
        if(this.props.rightButton)
        return (
            <View style={ScreenHeaderStyles.container}>

                <View style={ScreenHeaderStyles.left}>
                    <ScreenHeaderButton
                        style={ScreenHeaderStyles.leftButton}
                        onPress={this.props.onLeftButtonPress}
                        icon={
                            this.props.leftButtonIcon ||
                            this.props.backButton
                                ?require('./../../res/icons/back.png')
                                :require('./../../res/icons/menu.png')
                        }
                    />

                    <View style={ScreenHeaderStyles.titleContainer}>
                        <Text style={ScreenHeaderStyles.title}>
                            { this.props.title }
                        </Text>
                    </View>
                </View>

                <ScreenHeaderButton
                    style={ScreenHeaderStyles.rightButton}
                    onPress={this.props.rightButton.onPress}
                    icon={this.props.rightButton.icon}
                />
            </View>
        );
        return (
            <View style={ScreenHeaderStyles.container}>
                <View style={ScreenHeaderStyles.left}>
                    <ScreenHeaderButton
                        style={ScreenHeaderStyles.leftButton}
                        onPress={this.props.onLeftButtonPress}
                        icon={
                            this.props.leftButtonIcon ||
                            this.props.backButton
                                ?require('./../../res/icons/back.png')
                                :require('./../../res/icons/menu.png')
                        }
                    />

                    <View style={ScreenHeaderStyles.titleContainer}>
                        <Text style={ScreenHeaderStyles.title}>
                            { this.props.title }
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
