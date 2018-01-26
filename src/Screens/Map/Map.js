import React from 'react'
import { StyleSheet, Text, View, Button, Image, Modal, TouchableOpacity } from 'react-native';
import { MapView, Location } from 'expo';
const drawerIcon = require('./../../res/icons/menu.png');
const HSEMarkerIcon = require('./../../res/icons/HSEMapMarker.png');

function renderMarker(marker) {
    return <MapView.Marker
        title={marker.title}
        description={marker.description}
        coordinate={marker.coordinate}
        image={marker.image || HSEMarkerIcon}
    />
}

export const Map = (props) =>
    <View style={styles.container}>
        <View style={styles.drawerButtonContainer}>
            <TouchableOpacity
                onPress={props.toggleDrawer}
                style={styles.drawerIconContainer}
            >
                <Image
                    style={styles.drawerIcon}
                    source={drawerIcon}
                />
            </TouchableOpacity>
        </View>
        <MapView
            style={styles.map}
            provider={MapView.PROVIDER_GOOGLE}
            region={ props.region || {
                latitude: 58.01549776641786,
                longitude: 56.28597378730774,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02
            }}
            showUserLocation={true}
        >
            <MapView.Marker
                title={props.translation.BUILDING_1}
                description={props.translation.B_1_DESCRIPTION}
                coordinate={{
                    latitude: 58.010729448930846,
                    longitude: 56.28199338912964
                }}
                image={HSEMarkerIcon}
            />
            <MapView.Marker
                title={props.translation.BUILDING_2}
                description={props.translation.B_2_DESCRIPTION}
                coordinate={{
                    latitude: 58.01048504843841,
                    longitude: 56.291552782058716
                }}
                image={HSEMarkerIcon}
            />
            <MapView.Marker
                title={props.translation.BUILDING_3}
                description={props.translation.B_3_DESCRIPTION}
                coordinate={{
                    latitude: 58.01630473702123,
                    longitude: 56.27712786197662
                }}
                image={HSEMarkerIcon}
            />
            <MapView.Marker
                title={props.translation.BUILDING_4}
                description={props.translation.B_4_DESCRIPTION}
                coordinate={{
                    latitude: 58.020150383839045,
                    longitude: 56.28769978880882
                }}
                image={HSEMarkerIcon}
            />
            <MapView.Marker
                title={props.translation.OTHER_BUILDINGS.DORM}
                description={props.translation.OTHER_BUILDINGS.DORM_DESCRIPTION}
                coordinate={{
                    latitude: 58.00468999435765,
                    longitude: 56.30750387907028
                }}
                image={HSEMarkerIcon}
            />
            {props.markers && props.markers.map(marker => renderMarker(marker))}
        </MapView>
    </View>;

const styles = StyleSheet.create({
    container: {

    },
    map: {
        alignSelf: 'stretch',
        height: '100%',
        zIndex: 1,
    },
    drawerButtonContainer: {
        height: 55,
        width: 55,
        position: 'absolute',
        left: 15,
        top: 15,
        borderRadius: 1000,
        backgroundColor: '#003399',
        zIndex: 2,
        elevation: 10
    },
    drawerIconContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1000,
    },
    drawerIcon: {
        height: 25,
        width: 25,
    }
});