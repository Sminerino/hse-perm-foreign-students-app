import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { ScreenHeader } from "../../../../Controls/ScreenHeader/ScreenHeader";

export class AllNews extends React.Component {

    toggleDrawer = () => {
        this.props.drawerNav.navigate('DrawerToggle');
    };

    keyExtractor = (item) => item.id;

    renderItem = (item) => {

    };

    render() {
        console.log(this.props);
        return(
            <View >
                <ScreenHeader
                    title={this.props.translation.TITLE}
                    onLeftButtonPress={this.toggleDrawer}
                />
                <FlatList
                    data={this.props.news}
                    keyExtractor = {this.keyExtractor}

                />
            </View>
        );
    }
}