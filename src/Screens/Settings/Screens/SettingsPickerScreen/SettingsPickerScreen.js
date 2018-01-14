import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import SettingsPickerScreenStyles from './SettingsPickerScreenStyles';
import SettingsTile from './SettingsTile/SettingsTile';
import ScreenHeader from './../../../../Controls/ScreenHeader/ScreenHeader';
import GroupPickerModal from './GroupPickerModal/GroupPickerModal';
import settingsStoreActions from './../../../../AsyncStorageActions/settings/settings';
import tools from './../../../../tools/tools';

export default class SettingsPickerScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groupModalVisible: false,
            group: null,
            isLoaded: false
        }
    }

    componentWillMount() {
        settingsStoreActions.getGroup()
        .then(response => {
            if(response)
                this.setState({
                    group: response,
                    isLoaded: true
                });
        });
    }

    render() {
        if(this.state.isLoaded)
            return (
                <View style={SettingsPickerScreenStyles.container}>
                    <GroupPickerModal
                        onRequestClose={() => this.setState({groupModalVisible:false})}
                        visible={this.state.groupModalVisible}
                        group={this.state.group}
                        language={this.props.screenProps.language}
                        onSubmit={this._groupSubmit}
                    />
                    <ScreenHeader
                        title={this.props.screenProps.language.SETTINGS.TITLE}
                        onLeftButtonPress={() =>
                            this.props.screenProps.drawerNavigation.navigate('DrawerToggle')
                        }
                    />
                    <View style={SettingsPickerScreenStyles.tilesContainer}>
                        <SettingsTile
                            text={this.props.screenProps.language.SETTINGS.LANGUAGE}
                            icon={require('./../../../../res/icons/language.png')}
                            onPress={() => this.props.navigation.navigate('Language')}
                            currentSettingText={this.props.screenProps.language.LANG_LOCAL}
                        />
                        <SettingsTile
                            text={this.props.screenProps.language.SETTINGS.GROUP}
                            icon={require('./../../../../res/icons/group.png')}
                            onPress={ () => this.setState({groupModalVisible: true}) }
                            currentSettingText={
                                tools.getShortGroupString(
                                    this.state.group,
                                    this.props.screenProps.language.GROUP.PROGRAMS
                                )
                            }
                        />
                    </View>
                </View>
            );
        else return (
            <View style={SettingsPickerScreenStyles.container}>
                <ScreenHeader
                    title={this.props.screenProps.language.SETTINGS.TITLE}
                    onLeftButtonPress={() =>
                        this.props.screenProps.drawerNavigation.navigate('DrawerToggle')
                    }
                />
                <View style={SettingsPickerScreenStyles.loadingContainer}>
                    <ActivityIndicator color='#003399' size='large'/>
                </View>
            </View>
        );
    }

    _groupSubmit = (_group) => {
        this.setState(
            {group: _group},
            () => settingsStoreActions.setGroup(_group)
        )
    };
}
