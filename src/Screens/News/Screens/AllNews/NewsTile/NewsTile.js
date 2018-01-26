import React from 'react';
import { View, TouchableNativeFeedback, Image, Text, StyleSheet } from 'react-native';
import { processTitleLength } from "../../../../../tools/tools";
const arrowImage = require('./../../../../../res/icons/arrowRight.png');
const placeholderImage = require('./../../../../../res/placeholders/image.png');



export class NewsTile extends React.PureComponent {

    handlePress = () => {
        this.props.onPress(this.props.id, this.props.title);
    };

    render() {
        return (
            <TouchableNativeFeedback onPress={this.handlePress}>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Image
                            style={styles.image}
                            source={this.props.image || placeholderImage}
                        />
                        <View style={styles.text}>
                            <Text style={styles.header} >
                                {processTitleLength(this.props.title)}
                            </Text>
                            <Text style={styles.date}>
                                {this.props.date}
                            </Text>
                        </View>
                    </View>
                    <Image
                        style={styles.arrow}
                        source={arrowImage}
                    />
                </View>
            </TouchableNativeFeedback>
        );
    }
}

//title should be not longer than 50 characters

const styles = StyleSheet.create({
    container: {
        height: 150,
        marginBottom: 6,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 5,
        alignItems: 'center',
        paddingLeft: 2,
        paddingVertical: 1,
    },
    content: {
        flexDirection: 'row',
        marginRight: 25,
    },
    image: {
        width: 160,
    },
    text: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexShrink: 1
    },
    header: {
        flexGrow: 0,
        flexWrap: 'wrap',
        fontSize: 17,
        color: '#666666',
    },
    date: {
        fontSize: 12,
        color: '#003399'
    },
    arrow: {
        height: 25,
        width: 25,
        position: 'absolute',
        right: 0,
        top: 63
    }
});