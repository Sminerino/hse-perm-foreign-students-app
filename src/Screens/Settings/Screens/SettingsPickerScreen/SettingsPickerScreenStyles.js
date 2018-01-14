import { StyleSheet } from 'react-native';

const SettingsPickerScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    tilesContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SettingsPickerScreenStyles;