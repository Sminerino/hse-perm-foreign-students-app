import { StyleSheet } from 'react-native';

const ScreenHeaderStyles = StyleSheet.create({
    container: {
        backgroundColor: '#003399',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 55,
        elevation: 8,
    },
    left: {
        flexDirection: 'row',
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    title: {
        color: '#fffafa',
        fontSize: 17,
    },
    leftButton: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    rightButton: {
        marginRight: 5,
    }
});

export default ScreenHeaderStyles;