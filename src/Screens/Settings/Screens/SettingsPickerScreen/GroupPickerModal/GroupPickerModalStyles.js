import { StyleSheet } from 'react-native';

const GroupPickerModalStyles = StyleSheet.create({
    title: {
        color: '#003399',
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: '#D9E0F0',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },
    container: {
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    outsideWindowVertical: {
        flexGrow: 1,
        flexShrink: 0,
        alignSelf: 'stretch'
    },
    outsideWindowHorizontal: {
        flexGrow: 1,
        flexShrink: 0,
        alignSelf: 'stretch',
        height: '100%'
    },
    outsideWindowContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        borderRadius: 3,
    },
    window: {
        backgroundColor: '#fffafa',
        width: '95%',
        borderRadius: 3,
        flexGrow: 1,
    },
    pickersContainer: {
        flexDirection: 'row',
        flexGrow: 1,
    },
    picker: {
        flexGrow: 1
    },
    programPicker: {
        flexGrow: 2.5
    },
    itemStyle: {

    },
    buttonsContainer: {
        flexShrink: 3,
        flexDirection: 'row',
    },
    button: {
        height: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#003399',
    },
    buttonSeparator: {
        flexShrink: 3,
        marginVertical: 6,
        borderWidth: 0.3,
        borderColor: '#D9E0F0'
    }
});

export default GroupPickerModalStyles;