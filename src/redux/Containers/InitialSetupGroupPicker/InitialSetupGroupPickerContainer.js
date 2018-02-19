import {connect} from 'react-redux';
import {GroupPicker} from "../../../Controls/InitialSetup/GroupPicker/GroupPicker";
import {setGroupAsync, setInitialRunAsync} from "../../Actions/settingsActions";

const mapStateToProps = (state, ownProps) => {
    return {
        translation: {
            GROUP: state.translation.GROUP,
            INITIAL_SETUP: state.translation.INITIAL_SETUP
        },
        navigation: ownProps.navigation
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setGroup: (group) => { dispatch(setGroupAsync(group)); },
        endInitialSetup: () => { dispatch(setInitialRunAsync(true)); }
    };
};

export const InitialSetupGroupPickerContainer =
    connect(mapStateToProps, mapDispatchToProps)(GroupPicker);