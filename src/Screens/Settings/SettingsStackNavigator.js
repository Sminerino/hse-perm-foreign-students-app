import React from 'react'
import { StackNavigator } from 'react-navigation';
import { SettingsPickerContainer } from "../../redux/Containers/SettingsScreen/SettingsPickerContainer";
import { LanguagePickerContainer } from "../../redux/Containers/SettingsScreen/LanguagePickerContainer";

export const SettingsStackNavigator = ({navigation}) => {
    const SettingsStackNavigator = StackNavigator({
            Selector: {
                screen: SettingsPickerContainer,
            },
            Language: {
                screen: LanguagePickerContainer,
            },
        },
        {
            headerMode: 'none'
        }
    );
    return <SettingsStackNavigator
        screenProps={{drawerNav: navigation}}
    />;
};

