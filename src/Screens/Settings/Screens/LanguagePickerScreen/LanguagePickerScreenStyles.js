import { StyleSheet } from 'react-native';

const LanguagePickerScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    tilesContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    languageTile: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        paddingLeft: 25,
    },
    languageName: {
        color: '#003399',
        fontSize: 15,
    }
});

export default LanguagePickerScreenStyles;