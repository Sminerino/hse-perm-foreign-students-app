import React from 'react';
import { LoadingScreen } from './src/Screens/LoadingScreen/LoadingScreen';
import { StyleSheet, View, StatusBar} from 'react-native';
import { DrawerContainer } from "./src/redux/Containers/Drawer/DrawerContainer";
import { InitialSetupContainer } from "./src/redux/Containers/InitialSetup/InitialSetupContainer";
import defaultSettings from './src/settings/defaultSettings';

export class AppLoader extends React.Component {

    render() {
        if(this.props.passedInitialRun === undefined)
            return <LoadingScreen />;
        if(this.props.passedInitialRun === false) {
            return (
                this.renderBase(<InitialSetupContainer/>)
            );
        }
        if(this.props.isLoaded) {
            return (
                this.renderBase(<DrawerContainer />)
            );
        }
        else
            return <LoadingScreen />;
    }

    componentDidMount() {
        this.props.getInitialRun();
        this.props.loadTranslation();
    }

    renderBase(child) {
        return (
            <View style={ styles.base }>
                <View style={ styles.container }>
                    {child}
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
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#fffafa',
        flex: 1,
    }
});
