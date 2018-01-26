import { connect } from 'react-redux';
import { SettingsPickerScreen } from "../../../Screens/Settings/Screens/SettingsPickerScreen/SettingsPickerScreen";
import {getGroupAsync, setGroupAsync} from "../../Actions/settingsActions";

//temp during development
import { settingsAsyncStorageRequests } from "../../../AsyncStorageRequests/settings/settings";
import { languageGetter } from "../../../settings/lang/languageGetter";
//temp during development

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
        },
        toggleDrawer: () => {
            ownProps.screenProps.drawerNav.navigate('DrawerToggle');
        },
        //temp during development
        loadTranslationToAsync: () => {
            settingsAsyncStorageRequests
                .setTranslation(
                    'english',
                    languageGetter('english'));
            settingsAsyncStorageRequests
            .setTranslation(
                'russian',
                languageGetter('russian'));
        }
    }
};

export const SettingsPickerContainer =
    connect(mapStateToProps, mapDispatchToProps)(SettingsPickerScreen);