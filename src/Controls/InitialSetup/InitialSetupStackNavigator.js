import React from 'react';
import { StackNavigator } from 'react-navigation';
import { InitialSetupLanguagePickerContainer } from "../../redux/Containers/InitialSetupLanguagePicker/InitialSetupLanguagePickerContainer";

export const InitialSetupStackNavigator = () => {
    const InitialSetupStack = StackNavigator({
        LanguagePicker: {
            screen: InitialSetupLanguagePickerContainer
        },
        GroupPicker: {

        }

    },
        {
            headerMode: 'none',
        });
    return <InitialSetupStack />
};