import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar} from 'react-native';
import Drawer from './Controls/Drawer/Drawer';
import LanguageGetter from './settings/lang/languageGetter';

export default class MainApp extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        let settings = {
            language: LanguageGetter(this.props.language),
            updateLanguage: this.props.updateLanguage,
        };
        return (
            <View style={ styles.base }>
                <View style={ styles.container }>
                    <Drawer settings={settings} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    base: {
        flex:1,
        backgroundColor: '#003399',
    },
    container: {
        marginTop: StatusBar.currentHeight, // change that to 20 for ios build
        backgroundColor: '#fffafa',
        flex: 1,
    }
});

