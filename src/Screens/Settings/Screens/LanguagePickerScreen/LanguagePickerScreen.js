import React from 'react';
import { View } from 'react-native';
import LanguagePickerScreenStyles from './LanguagePickerScreenStyles';
import { ScreenHeader } from './../../../../Controls/ScreenHeader/ScreenHeader';
import { LanguageTile } from './LanguageTile/LanguageTile';

export const LanguagePickerScreen = ({goBack, translation, setLanguage}) =>
    <View style={LanguagePickerScreenStyles.container}>
        <ScreenHeader
            title={translation.SETTINGS.LANGUAGE}
            onLeftButtonPress={goBack}
            backButton={true}
        />
        <View style={LanguagePickerScreenStyles.tilesContainer}>
            <LanguageTile
                onPress={setLanguage}
                text='English'
                language='english'
                currentLanguage={translation.LANG}
            />
            <LanguageTile
                onPress={setLanguage}
                text='Русский'
                language='russian'
                currentLanguage={translation.LANG}
            />
        </View>
    </View>;