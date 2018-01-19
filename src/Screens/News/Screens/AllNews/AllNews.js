import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { ScreenHeader } from "../../../../Controls/ScreenHeader/ScreenHeader";

export class AllNews extends React.Component {
    render() {
        console.log(this.props);
        return(
            <ScreenHeader
                title={this.props.screenProps.language.NEWS.TITLE}
                onLeftButtonPress={() =>
                    this.props.screenProps
                    .drawerNavigation.navigate('DrawerToggle')
                }
            />
        );
    }
}