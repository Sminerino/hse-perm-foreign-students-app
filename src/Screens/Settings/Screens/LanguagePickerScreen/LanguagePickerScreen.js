import React from 'react';
import { View } from 'react-native';
import LanguagePickerScreenStyles from './LanguagePickerScreenStyles';
import { ScreenHeader } from './../../../../Controls/ScreenHeader/ScreenHeader';
import { LanguageTile } from './LanguageTile/LanguageTile';

export const LanguagePickerScreen = (props) =>
    <View style={LanguagePickerScreenStyles.container}>
        <ScreenHeader
            title={props.translation.SETTINGS.LANGUAGE}
            onLeftButtonPress={props.navigation.goBack}
            backButton={true}
        />
        <View style={LanguagePickerScreenStyles.tilesContainer}>
            <LanguageTile
                onPress={props.setLanguage}
                text='English'
                language='english'
                currentLanguage={props.translation.LANG}
            />
            <LanguageTile
                onPress={props.setLanguage}
                text='Русский'
                language='russian'
                currentLanguage={props.translation.LANG}
            />
        </View>
    </View>;