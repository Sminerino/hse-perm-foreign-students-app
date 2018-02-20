import React from 'react';
import { TouchableNativeFeedback, StyleSheet, View, Image } from 'react-native';

export class LanguageButton extends React.PureComponent {
    render() {
        if(this.props.active)
            return (
                <View style={styles.containerActive}>
                    <TouchableNativeFeedback
                        onPress={this.handlePress}
                    >
                        <View style={styles.innerContainer}>
                            <Image source={this.props.image} style={styles.image}/>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            );
        return (
            <View style={styles.containerInactive}>
                <TouchableNativeFeedback
                    onPress={this.handlePress}
                    style={{alignItems: 'center'}}
                >
                    <View style={styles.innerContainer}>
                        <Image source={this.props.image} style={styles.image}/>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

    handlePress = () => {
        this.props.onPress(this.props.language)
    }
}
const styles = StyleSheet.create({
    containerActive: {
        backgroundColor: '#6685C2',
        margin: 10,
        borderRadius: 7,
        elevation: 10,
        alignContent: 'center',
    },
    image: {
        borderColor: '#003399',
        borderWidth: 1,
        height: 100,
        width: 150
    },
    containerInactive: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 7,
        elevation: 10,
        alignContent: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 40,
    },
    innerContainer: {
        padding: 15,
    }
});