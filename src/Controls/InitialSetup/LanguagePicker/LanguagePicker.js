import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback, Text } from 'react-native';
import { LanguageButton } from "./LanguageButton/LanguageButton";
import { ScreenIndicator } from "../ScreenIndicator/ScreenIndicator";

export class LanguagePicker extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text>
                        {this.props.translation.INITIAL_SETUP.CHOOSE_LANGUAGE}
                    </Text>
                </View>
                <View style={styles.pickerContainer}>
                    <LanguageButton
                        language='russian'
                        languageLocal='Русский'
                        onPress={this.props.setLanguage}
                    />
                    <LanguageButton
                        language='english'
                        languageLocal='English'
                        onPress={this.props.setLanguage}
                    />
                </View>
                <ScreenIndicator
                    length={3}
                    current={0}
                />
                <View>
                    <TouchableNativeFeedback
                        onPress={this.navigateGroupPicker}
                    >
                        <Text>
                            {this.props.translation.INITIAL_SETUP.NEXT}
                        </Text>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }

    navigateGroupPicker = () => {
        this.props.navigation.navigate('GroupPicker');
    };
}
const styles = StyleSheet.create({

});