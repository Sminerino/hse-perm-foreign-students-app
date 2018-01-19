import { connect } from 'react-redux';
import { Drawer } from "../../../Controls/Drawer/Drawer";

const mapStateToProps = (state, ownProps) => {
    return {
        translation: state.translation.DRAWER
    }
};

export const DrawerContainer = connect(mapStateToProps)(Drawer);

