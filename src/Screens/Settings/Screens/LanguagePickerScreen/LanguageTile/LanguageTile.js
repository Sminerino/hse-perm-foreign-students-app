import React from 'react';
import { View, Text, TouchableNativeFeedback, Image } from 'react-native';
import LanguageTileStyles from './LanguageTileStyles';

export default class LanguageTile extends React.Component {
    render() {
        return (
            <TouchableNativeFeedback
                onPress={() => this.props.onPress(this.props.language)}
            >
                <View style={LanguageTileStyles.container}>
                    {this.props.language === this.props.currentLanguage
                        ?
                        <Image
                            style={LanguageTileStyles.checkIcon}
                            source={require('./../../../../../res/icons/check.png')}
                        />
                        :
                        <View style={LanguageTileStyles.checkIcon} />
                    }
                    <Text style={LanguageTileStyles.text}>
                        {this.props.text}
                    </Text>

                </View>
            </TouchableNativeFeedback>
        );

    }
}