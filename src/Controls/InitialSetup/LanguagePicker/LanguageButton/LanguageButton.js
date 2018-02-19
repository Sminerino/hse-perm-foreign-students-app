import React from 'react';
import { TouchableNativeFeedback, StyleSheet, View, Text } from 'react-native';

export class LanguageButton extends React.PureComponent {
    render() {
        return (
            <View>
                <TouchableNativeFeedback
                    onPress={this.handlePress}
                >
                    <Text>
                    {this.props.languageLocal}
                    </Text>
                </TouchableNativeFeedback>
            </View>
        );
    }

    handlePress = () => {
        this.props.onPress(this.props.language)
    }
}
const styles = StyleSheet.create({

});