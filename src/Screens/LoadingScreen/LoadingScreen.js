import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default class LoadingScreen extends React.Component {
    render() {
        return(
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent:'center',
                backgroundColor: '#fffafa'
            }}>
                <ActivityIndicator color='#003399' size='large'/>
            </View>
        );
    }
}
