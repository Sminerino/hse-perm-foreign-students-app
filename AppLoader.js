import React from 'react';
import LoadingScreen from './src/Screens/LoadingScreen/LoadingScreen';
import Workspace from './src/Workspace';
import settingsStoreActions from './src/AsyncStorageActions/settings/settings';
import defaultSettings from './src/settings/defaultSettings';

export default class AppLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            settings: null,
            updateLanguage: this._setLanguage,
        }
    }
    render() {
        if(this.state.isLoaded) {
            const { isLoaded, ...settings} = this.state;
            return <Workspace {...settings} />;
        }
        else
            return <LoadingScreen/>;
    }
    componentDidMount() {
        settingsStoreActions.getLanguage()
        .then(response => {
            if (response) {
                this.setState({
                    language: response,
                    isLoaded: true
                });
            }
            else {
                this.setState({
                    ...defaultSettings,
                    isLoaded: true,
                });
            }
        });
    }

    _setLanguage = (_language) => {
        this.setState(
            {language: _language},
            () => settingsStoreActions.setLanguage(_language)
        );
    };

}