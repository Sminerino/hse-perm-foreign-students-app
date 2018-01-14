import React from 'react';
import { View, Text } from 'react-native';
import LanguagePickerScreenStyles from './LanguagePickerScreenStyles';
import ScreenHeader from './../../../../Controls/ScreenHeader/ScreenHeader';
import LanguageTile from './LanguageTile/LanguageTile';

export default class LanguagePickerScreen extends React.Component {
    render() {
        return (
            <View style={LanguagePickerScreenStyles.container}>
                <ScreenHeader
                    title={this.props.screenProps.language.SETTINGS.LANGUAGE}
                    onLeftButtonPress={() =>
                        this.props.navigation.goBack()
                    }
                    backButton={true}
                />
                <View style={LanguagePickerScreenStyles.tilesContainer}>
                    <LanguageTile
                        onPress={this.props.screenProps.updateLanguage}
                        text='English'
                        language='english'
                        currentLanguage={this.props.screenProps.language.LANG}
                    />
                    <LanguageTile
                        onPress={this.props.screenProps.updateLanguage}
                        text='Русский'
                        language='russian'
                        currentLanguage={this.props.screenProps.language.LANG}
                    />
                </View>
            </View>
        );
    }
}