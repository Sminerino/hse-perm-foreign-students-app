import React from 'react';
import { TouchableNativeFeedback, StyleSheet } from 'react-native';

export class LanguageButton extends React.PureComponent {
    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.handlePress}
            >
                {this.props.languageLocal}
            </TouchableNativeFeedback>
        );
    }

    handlePress = () => {
        this.props.onPress(this.props.language)
    }
}
const styles = StyleSheet.create({

});