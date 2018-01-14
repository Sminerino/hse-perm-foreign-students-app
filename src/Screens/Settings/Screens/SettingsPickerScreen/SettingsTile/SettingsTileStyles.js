import { StyleSheet } from 'react-native';

const SettingsTileStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        paddingLeft: 25,
    },
    text: {
        marginLeft: 20,
        flexDirection: 'column',
    },
    title: {
        fontSize: 15,
        color: '#003399',
    },
    current: {
        fontSize: 9,
        color: '#003399',
        opacity: 0.6,
    },
    icon: {
        width: 30,
        height: 30,
    }
});

export default SettingsTileStyles;