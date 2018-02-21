import { connect } from 'react-redux';
import { LanguagePickerScreen } from "../../../Screens/Settings/Screens/LanguagePickerScreen/LanguagePickerScreen";
import { setLanguageAsync } from "../../Actions/settingsActions";

const mapStateToProps = (state, ownProps) => {
    return {
        translation: {
            SETTINGS: state.translation.SETTINGS,
            LANG: state.translation.LANG
        },
        goBack: () => ownProps.navigation.goBack()
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setLanguage: (language) => {
            dispatch(setLanguageAsync(language));
        }
    }
};

export const LanguagePickerContainer =
    connect(mapStateToProps, mapDispatchToProps)(LanguagePickerScreen);