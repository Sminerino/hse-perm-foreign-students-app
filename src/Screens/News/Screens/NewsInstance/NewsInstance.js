import React from 'react';
import { ScreenHeader } from "../../../../Controls/ScreenHeader/ScreenHeader";
import { Text, View, Button, Image, StyleSheet } from 'react-native';

export class NewsInstance extends React.Component {

    componentDidMount() {

    }

    requestDataFromAsyncStorage() {

    }

    render() {
        return(
            <View style={styles.container}>
                <ScreenHeader
                    backButton={true}
                    onLeftButtonPress={props.navigation.goBack}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});