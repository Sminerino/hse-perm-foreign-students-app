import React from 'react';
import { LoadingScreen } from './src/Screens/LoadingScreen/LoadingScreen';
import { StyleSheet, View, StatusBar} from 'react-native';
import { DrawerContainer } from "./src/redux/Containers/Drawer/DrawerContainer";
import { InitialSetupContainer } from "./src/redux/Containers/InitialSetup/InitialSetupContainer";
import defaultSettings from './src/settings/defaultSettings';

//this module is wrapped in redux container

export class AppLoader extends React.Component {

    render() {
        if(this.props.initialRun)
            return <InitialSetupContainer />;
        if(this.props.isLoaded) {
            return (
                <View style={ styles.base }>
                    <View style={ styles.container }>
                        <DrawerContainer />
                    </View>
                </View>
            );
        }
        else
            return <LoadingScreen />;
    }

    componentDidMount() {
        this.props.loadApp();
    }

}

const styles = StyleSheet.create({
    base: {
        flex:1,
        backgroundColor: '#003399',
    },
    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#fffafa',
        flex: 1,
    }
});
