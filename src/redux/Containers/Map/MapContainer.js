import { connect } from 'react-redux';
import { Map } from "../../../Screens/Map/Map";

const mapStateToProps = (state, ownProps) => {
    return {
        translation: state.translation.MAPS,
        toggleDrawer: () => {
            ownProps.navigation.navigate('DrawerToggle');
        },
        //region: ownProps.navigation.state.params.region,

    }
};

export const MapContainer = connect(mapStateToProps)(Map);