import { ActionTypes } from "../ActionTypes/actionTypes";
import { timetableAsyncStorageRequests } from "../../AsyncStorageRequests/timetable/timetable";

function setClassesSync(classes, date) {
    return {
        type: ActionTypes.SET_VIEWED_TIMETABLE_DAY,
        classes,
        date
    }
}

function getClasses(date) {
    return timetableAsyncStorageRequests.getClassesForDate(date);
}

export function setClassesAsync(date) {
    return dispatch => {
        return getClasses(date)
            .then(response => {
                dispatch(setClassesSync(response, date));
            })
            .catch(reject => {
                dispatch({
                    type: ActionTypes.SET_VIEWED_TIMETABLE_DAY_NOT_FOUND_ERR,
                })
            });
    }
}

//need to hydrate asyncstorage from backend