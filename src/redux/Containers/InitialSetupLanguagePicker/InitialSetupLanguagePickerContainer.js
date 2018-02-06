import { connect } from 'react-redux';
import { setLanguageAsync } from "../../Actions/settingsActions";
import { LanguagePicker} from "../../../Controls/InitialSetup/LanguagePicker/LanguagePicker";


const mapStateToProps = (state, ownProps) => {
    return {
        translation: {
            LANG_LOCAL: state.translation.LANG_LOCAL,
            INITIAL_SETUP: state.translation.INITIAL_SETUP
        },
        language: state.translation.LANG,
        navigation: ownProps.navigation
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setLanguage: (language) => {
            dispatch(setLanguageAsync(language));
        }
    }
};

export const InitialSetupLanguagePickerContainer =
    connect(mapStateToProps, mapDispatchToProps)(LanguagePicker);