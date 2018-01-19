import React from 'react';
import { View, TouchableNativeFeedback, Image, Text, StyleSheet } from 'react-native';
const placeholderImage = require('./../../../../../res/placeholders/image.png');
const arrowImage = require('./../../../../../res/icons/arrowRight.png');

export const NewsTile = (props) =>
    <TouchableNativeFeedback onPress={props.onPress}>
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    style={styles.image}
                    source={placeholderImage}
                />
                <View style={styles.text}>
                    <Text style={styles.header} >
                        {props.title}
                    </Text>
                    <Text style={styles.date}>
                        {props.date}
                    </Text>
                </View>
                <Image
                    style={styles.arrow}
                    source={arrowImage}
                />
            </View>
        </View>
    </TouchableNativeFeedback>;

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: 'red'
    },
    content: {

    },
    image: {

    },
    text: {

    },
    date: {

    },
    arrow: {

    }
});