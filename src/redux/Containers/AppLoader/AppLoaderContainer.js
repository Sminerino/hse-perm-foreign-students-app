import { connect } from 'react-redux';
import {
    getTranslationAsync,
    setInitialRunAsync,
    getInitialRunAsync
} from "../../Actions/settingsActions";
import { AppLoader } from "../../../../AppLoader";
import { ActionTypes } from "../../ActionTypes/actionTypes";

const mapStateToProps = (state, ownProps) => {
    return {
        isLoaded: !!state.translation,
        passedInitialRun: state.passedInitialRun
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadTranslation() {
            dispatch(getTranslationAsync());
        },
        getInitialRun() {
            dispatch(getInitialRunAsync());
        }
    }

};

export const AppLoaderContainer =
    connect(mapStateToProps, mapDispatchToProps)(AppLoader);