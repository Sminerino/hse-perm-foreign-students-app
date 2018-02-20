import React from 'react'
import { StyleSheet, Text, View, Button, Image, Modal } from 'react-native';
import {SelectPicker} from 'react-native-select-picker';

export default class Events extends React.Component {
    render() {
        return(
            <View style={{ backgroundColor: '#d9e0f0', flex: 1, flexWrap: 'wrap', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, color: '#003399', flexWrap: 'wrap', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    This section is under maintenance
                </Text>
                <Text style={{fontSize: 20, color: '#003399', flexWrap: 'wrap', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    Please come back later
                </Text>
            </View>

        );
    }
}