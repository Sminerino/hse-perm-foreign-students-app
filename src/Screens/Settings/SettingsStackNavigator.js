import React from 'react'
import { Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SettingsPickerScreen from './Screens/SettingsPickerScreen/SettingsPickerScreen';
import LanguagePickerScreen from './Screens/LanguagePickerScreen/LanguagePickerScreen';

const Settings = (wrapperProps) => {
    const SettingsStackNavigator = StackNavigator({
            Selector: {
                screen: SettingsPickerScreen,
            },
            Language: {
                screen: LanguagePickerScreen,
            },
        },
        {
            headerMode: 'none'
        }
    );
    return <SettingsStackNavigator
        screenProps = {{ ...wrapperProps.screenProps, drawerNavigation: wrapperProps.navigation }}
    />;
};

export default Settings;

