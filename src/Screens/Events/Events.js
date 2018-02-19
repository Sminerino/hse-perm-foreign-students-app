import React from 'react'
import { StyleSheet, Text, View, Button, Image, Modal } from 'react-native';
import {SelectPicker} from 'react-native-select-picker';

export default class Events extends React.Component {
    render() {
        return(
            <View>
                <SelectPicker
                    data={[1,2,3,4,5]}
                />
            </View>

        );
    }
}