import { connect } from 'react-redux';
import { ActionTypes } from "../../ActionTypes/actionTypes";
import { setLanguageAsync, loadTranslationAPItoAsync, setGroupAsync } from "../../Actions/settingsActions";
import { InitialSetupStackNavigator } from "../../../Controls/InitialSetup/InitialSetupStackNavigator";

const mapStateToProps = (state, ownProps) => {
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadInitialDataToAsync: async () => {
            loadTranslationAPItoAsync()
                .catch(() => {
                    dispatch({
                        type: ActionTypes.LOAD_TRANSLATION_FROM_API_ERR
                    })
                })
        }
    }
};

export const InitialSetupContainer =
    connect(mapStateToProps, mapDispatchToProps)(InitialSetupStackNavigator);