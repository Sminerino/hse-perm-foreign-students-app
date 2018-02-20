import React from 'react';
import { StackNavigator } from 'react-navigation';
import { InitialSetupLanguagePickerContainer } from "../../redux/Containers/InitialSetupLanguagePicker/InitialSetupLanguagePickerContainer";
import { InitialSetupGroupPickerContainer } from "../../redux/Containers/InitialSetupGroupPicker/InitialSetupGroupPickerContainer";
import { LoadingScreen } from "../../Screens/LoadingScreen/LoadingScreen";

export class InitialSetupStackNavigator extends React.Component {

    componentDidMount() {
        this.props.loadInitialDataToAsync();
    }

    render() {
        const InitialSetupStack = StackNavigator({
                LanguagePicker: {
                    screen: InitialSetupLanguagePickerContainer
                },
                GroupPicker: {
                    screen: InitialSetupGroupPickerContainer
                }
            },
            {
                headerMode: 'none',
            });
        if(this.props.translationLoaded)
            return <InitialSetupStack />;
        else return <LoadingScreen />;
    }
}