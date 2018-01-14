import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import DrawerStyles from './DrawerStyles';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import DrawerSearch from './DrawerSearch/DrawerSearch';

import Timetable from '../../Screens/Timetable/Timetable';
import News from '../../Screens/News/News';
import Events from '../../Screens/Events/Events';
import Info from '../../Screens/Info/Info';
import Map from '../../Screens/Map/Map';
import Settings from "../../Screens/Settings/SettingsStackNavigator";
import settingsStoreActions from "../../AsyncStorageActions/settings/settings";

export default class DrawerLanguageWrapper extends React.Component {

    render() {
        const DrawerContent = (props) =>
            <View>
                <DrawerSearch lang={this.props.settings.language}/>
                <View style={DrawerStyles.separator}/>
                <DrawerItems {...props} />
            </View>;

        const Drawer = DrawerNavigator({
                Timetable: {
                    screen: Timetable,
                    navigationOptions: {
                        drawerLabel: this.props.settings.language.DRAWER.TIMETABLE,
                        drawerIcon:
                            <Image
                                source={require('../../res/icons/timetable.png')}
                                style={DrawerStyles.icon}
                            />,
                    }
                },
                News: {
                    screen: News,
                    navigationOptions: {
                        drawerLabel: this.props.settings.language.DRAWER.NEWS,
                        drawerIcon:
                            <Image
                                source={require('../../res/icons/news.png')}
                                style={DrawerStyles.icon}
                            />,
                    }
                },
                Events: {
                    screen: Events,
                    navigationOptions: {
                        drawerLabel: this.props.settings.language.DRAWER.EVENTS,
                        drawerIcon:
                            <Image
                                source={require('../../res/icons/events.png')}
                                style={DrawerStyles.icon}
                            />,
                    }
                },
                HSEInfo: {
                    screen: Info,
                    navigationOptions: {
                        drawerLabel: this.props.settings.language.DRAWER.INFO,
                        drawerIcon:
                            <Image
                                source={require('../../res/icons/info.png')}
                                style={DrawerStyles.icon}
                            />,
                    }
                },
                Map: {
                    screen: Map,
                    navigationOptions: {
                        drawerLabel: this.props.settings.language.DRAWER.MAP,
                        drawerIcon:
                            <Image
                                source={require('../../res/icons/map.png')}
                                style={DrawerStyles.icon}
                            />,
                    }
                },
                Settings: {
                    screen: Settings,
                    navigationOptions: {
                        drawerLabel: this.props.settings.language.DRAWER.SETTINGS,
                        drawerIcon:
                            <Image
                                source={require('../../res/icons/settings.png')}
                                style={DrawerStyles.icon}
                            />,
                    }
                }
            },
            {
                drawerWidth: 270,
                drawerBackgroundColor: '#D9E0F0',
                initialRouteName: 'Timetable', //later we could make this changeable through settings
                contentOptions: {
                    inactiveBackgroundColor: null,
                    inactiveTintColor: '#003399',
                    activeTintColor: '#003399',
                    activeOpacity: 1,
                    inactiveOpacity: 0.6,
                    labelStyle: {fontWeight: 'normal'}
                },
                itemsContainerStyle: DrawerStyles.itemsContainer, //this acts strange, figure out
                contentComponent: DrawerContent,
            }
        );
        return <Drawer screenProps={{...this.props.settings}}/>;
    }
}
