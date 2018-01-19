import React from 'react';
import { View, Text, TouchableNativeFeedback, Image } from 'react-native';
import LanguageTileStyles from './LanguageTileStyles';

export class LanguageTile extends React.Component {

    handlePress = () => {
        this.props.onPress(this.props.language);
    };

    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.handlePress}
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