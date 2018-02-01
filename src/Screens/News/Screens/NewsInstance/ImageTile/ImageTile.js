import React from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';

export class ImageTile extends React.PureComponent {

    handlePress = () => {
        this.props.onPress(this.id);
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.handlePress}
                >
                    {this.props.image}
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    image: {

    },
    touchable: {

    }
});