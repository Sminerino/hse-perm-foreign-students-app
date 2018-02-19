import { connect } from 'react-redux';
import { ActionTypes } from "../../ActionTypes/actionTypes";
import { loadTranslationAPItoAsync, setLanguageAsync } from "../../Actions/settingsActions";
import { InitialSetupStackNavigator } from "../../../Controls/InitialSetup/InitialSetupStackNavigator";

const mapStateToProps = (state, ownProps) => {
    return {
        translationLoaded: !!state.translation
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadInitialDataToAsync: async () => {
            try {
                await loadTranslationAPItoAsync();
            }
            catch(err) {
                dispatch({
                    type: ActionTypes.LOAD_TRANSLATION_FROM_API_ERR
                });
                return;
            }
            dispatch(setLanguageAsync('english'));
        }
    }
};

export const InitialSetupContainer =
    connect(mapStateToProps, mapDispatchToProps)(InitialSetupStackNavigator);