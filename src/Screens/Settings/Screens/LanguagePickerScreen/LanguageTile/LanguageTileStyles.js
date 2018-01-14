import { StyleSheet } from 'react-native';

const LanguageTileStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 60,
        alignItems: 'center',
        paddingLeft: 15,
    },
    text: {
        color: '#003399',
        fontSize: 15,
    },
    checkIcon: {
        height: 20,
        width: 20,
        marginRight: 15,
    }
});

export default LanguageTileStyles;