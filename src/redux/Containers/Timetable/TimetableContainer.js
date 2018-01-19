import { connect } from 'react-redux';
import { Timetable } from "../../../Screens/Timetable/Timetable";
import { setClassesAsync } from "../../Actions/timetableActions";

const mapStateToProps = (state, ownProps) => {
    return {
        translation: {
            TIMETABLE: state.translation.TIMETABLE,
            DATE: state.translation.DATE,
        },
        classes: state.viewedTimetableDay.classes,
        date: state.viewedTimetableDay.date,
        navigation: ownProps.navigation
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setClasses: (date) => {
            dispatch(setClassesAsync(date));
        }
    }
};

export const TimetableContainer =
    connect(mapStateToProps, mapDispatchToProps)(Timetable);