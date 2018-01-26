import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const LoadingScreen = () => (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fffafa'
    }}>
        <ActivityIndicator color='#003399' size='large'/>
    </View>
);