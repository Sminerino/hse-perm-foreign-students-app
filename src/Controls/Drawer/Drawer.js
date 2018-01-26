import React from 'react';
import { View, Image } from 'react-native';
import DrawerStyles from './DrawerStyles';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import DrawerSearch from './DrawerSearch/DrawerSearch';

import { TimetableContainer } from "../../redux/Containers/Timetable/TimetableContainer";
import { NewsStackNavigator } from "../../Screens/News/NewsStackNavigator";
import Events from '../../Screens/Events/Events';
import Info from '../../Screens/Info/Info';
import { MapContainer } from "../../redux/Containers/Map/MapContainer";
import { SettingsStackNavigator } from "../../Screens/Settings/SettingsStackNavigator";

export const Drawer = (props) => {

    const DrawerContent = (_props) => (
        <View>
            <DrawerSearch placeholder={props.translation.SEARCH}/>
            <View style={DrawerStyles.separator}/>
            <DrawerItems {..._props} />
        </View>);

    const Drawer = DrawerNavigator({
            Timetable: {
                screen: TimetableContainer,
                navigationOptions: {
                    drawerLabel: props.translation.TIMETABLE,
                    drawerIcon:
                        <Image
                            source={require('../../res/icons/timetable.png')}
                            style={DrawerStyles.icon}
                        />,
                }
            },
            News: {
                screen: NewsStackNavigator,
                navigationOptions: {
                    drawerLabel: props.translation.NEWS,
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
                    drawerLabel: props.translation.EVENTS,
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
                    drawerLabel: props.translation.INFO,
                    drawerIcon:
                        <Image
                            source={require('../../res/icons/info.png')}
                            style={DrawerStyles.icon}
                        />,
                }
            },
            Map: {
                screen: MapContainer,
                navigationOptions: {
                    drawerLabel: props.translation.MAP,
                    drawerIcon:
                        <Image
                            source={require('../../res/icons/map.png')}
                            style={DrawerStyles.icon}
                        />,
                }
            },
            Settings: {
                screen: SettingsStackNavigator,
                navigationOptions: {
                    drawerLabel: props.translation.SETTINGS,
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
            itemsContainerStyle: DrawerStyles.itemsContainer,
            contentComponent: DrawerContent,
        }
    );
    return <Drawer />
};