import { StyleSheet } from 'react-native';

const ClassTilesContainerStyles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 15
    },
    tile: {
        height: 80,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timeContainer: {
        flexGrow: 2,
    },
    titleTeacherContainer: {
        flexGrow: 4,
        flexShrink: 0,
        flexDirection: 'column',
        alignItems: 'center',
    },
    locationContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    text: {
        color: '#003399',
        fontSize: 14,
    },
    textSmall: {
        color: '#003399',
        fontSize: 7,
    }
});

export { ClassTilesContainerStyles };