import { connect } from 'react-redux';
import { SettingsPickerScreen } from "../../../Screens/Settings/Screens/SettingsPickerScreen/SettingsPickerScreen";
import {getGroupAsync, setGroupAsync} from "../../Actions/settingsActions";

const mapStateToProps = (state, ownProps) => {
    return {
        group: state.group,
        languageLocal: state.translation.LANG_LOCAL,
        translation: {
            GROUP: state.translation.GROUP,
            SETTINGS: state.translation.SETTINGS,
            INTERFACE: state.translation.INTERFACE
        },
        navigation: ownProps.navigation
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setGroup: (group) => {
            dispatch(setGroupAsync(group));
        },
        loadGroup: () => {
            dispatch(getGroupAsync());
        }
    }
};

export const SettingsPickerContainer =
    connect(mapStateToProps, mapDispatchToProps)(SettingsPickerScreen);