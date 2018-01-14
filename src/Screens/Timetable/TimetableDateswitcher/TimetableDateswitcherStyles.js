import { StyleSheet } from 'react-native';

const TimetableDateswitcherStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fffafa',
        elevation: 5,
    },
    arrowLeft: {
        transform: [{rotate: '180deg'}],
        height: 40,
        width: 40,
        margin: 8,
    },
    arrowRight: {
        height: 40,
        width: 40,
        margin: 8,
    },
    dateTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateTitle: {
        fontSize: 17,
        color: '#003399',
    }
});

export default TimetableDateswitcherStyles;