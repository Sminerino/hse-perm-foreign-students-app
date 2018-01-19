import { connect } from 'react-redux';
import { getGroupAsync, getTranslationAsync } from "../../Actions/settingsActions";
import { AppLoader } from "../../../../AppLoader";

const mapStateToProps = (state, ownProps) => {
    return {
        isLoaded: !!state.translation
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadApp() {
            dispatch(getTranslationAsync());
        }
    }
};

export const AppLoaderContainer =
    connect(mapStateToProps, mapDispatchToProps)(AppLoader);