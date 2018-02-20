import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { LanguageButton } from "./LanguageButton/LanguageButton";
import { ScreenIndicator } from "../ScreenIndicator/ScreenIndicator";
const flag_uk = require('./../../../res/icons/flag_uk.png');
const flag_ru = require('./../../../res/icons/flag_ru.png');

export class LanguagePicker extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        {this.props.translation.INITIAL_SETUP.CHOOSE_LANGUAGE}
                    </Text>
                </View>
                <View style={styles.pickerContainer}>
                    <LanguageButton
                        language='russian'
                        active={this.props.language === 'russian'}
                        onPress={this.props.setLanguage}
                        image={flag_ru}
                    />
                    <LanguageButton
                        language='english'
                        active={this.props.language === 'english'}
                        onPress={this.props.setLanguage}
                        image={flag_uk}
                    />
                </View>
                <ScreenIndicator
                    length={3}
                    current={0}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this.navigateGroupPicker}
                        title={this.props.translation.INITIAL_SETUP.NEXT}
                        color='#003399'
                        padding={10}
                    />
                </View>
            </View>
        );
    }

    navigateGroupPicker = () => {
        this.props.navigation.navigate('GroupPicker');
    };
}
const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        marginTop: 10
    },
    titleText: {
        color: '#003399',
        fontSize: 25
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonContainer: {
        alignSelf: 'flex-end',
        marginTop: 'auto',
        marginBottom: 10,
        marginRight: 10
    },
    container: {
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    }
});