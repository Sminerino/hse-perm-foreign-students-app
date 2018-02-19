import React from 'react';
import { View, Button } from 'react-native';
import SettingsPickerScreenStyles from './SettingsPickerScreenStyles';
import { SettingsTile } from './SettingsTile/SettingsTile';
import { ScreenHeader } from './../../../../Controls/ScreenHeader/ScreenHeader';
import { GroupPickerModal } from './GroupPickerModal/GroupPickerModal';
import { getShortGroupString } from "../../../../tools/tools";

export class SettingsPickerScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groupModalVisible: false,
            loaded: false
        }
    }

    setGroup = (group) => {
        this.props.setGroup(group);
    };

    closeModal = () => {
        this.setState({
            groupModalVisible: false
        });
    };

    openModal = () => {
        this.setState({
            groupModalVisible: true
        });
    };

    navigateToLanguagePicker = () => {
        this.props.navigation.navigate('Language');
    };

    componentDidMount() {
        this.props.loadGroup();
    }

    render() {
        return (
            <View style={SettingsPickerScreenStyles.container}>
                <GroupPickerModal
                    onRequestClose={this.closeModal}
                    visible={this.state.groupModalVisible}
                    group={this.props.group}
                    translation={{
                        GROUP: this.props.translation.GROUP,
                        INTERFACE: this.props.translation.INTERFACE
                    }}
                    onSubmit={this.setGroup}
                />
                <ScreenHeader
                    title={this.props.translation.SETTINGS.TITLE}
                    onLeftButtonPress={this.props.toggleDrawer}
                />
                <View style={SettingsPickerScreenStyles.tilesContainer}>
                    <SettingsTile
                        text={this.props.translation.SETTINGS.LANGUAGE}
                        icon={require('./../../../../res/icons/language.png')}
                        onPress={this.navigateToLanguagePicker}
                        currentSettingText={this.props.languageLocal}
                    />
                    <SettingsTile
                        text={this.props.translation.SETTINGS.GROUP}
                        icon={require('./../../../../res/icons/group.png')}
                        onPress={this.openModal}
                        currentSettingText={
                            getShortGroupString(
                                this.props.group,
                                this.props.translation.GROUP.PROGRAMS
                            )
                        }
                    />
                </View>
                <Button
                    title='Load translation to AsyncStorage'
                    color='#003399'
                    onPress={this.props.loadTranslationToAsync}
                />
                <Button
                    title='Re-pass initial setup'
                    color='#003399'
                    onPress={this.props.passInitialSetup}
                />
            </View>
        );
    }
}
