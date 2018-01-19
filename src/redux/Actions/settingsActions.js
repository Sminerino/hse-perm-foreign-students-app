import { ActionTypes } from "../ActionTypes/actionTypes";
import { settingsAsyncStorageRequests } from "../../AsyncStorageRequests/settings/settings";

function setTranslationSync(translation) {
    return {
        type: ActionTypes.SET_TRANSLATION,
        translation
    }
}

function setGroupSync(group) {
    return {
        type: ActionTypes.SET_GROUP,
        group
    }
}

function getLanguage() {
    return settingsAsyncStorageRequests.getLanguage();
}

function getTranslation(language) {
    return settingsAsyncStorageRequests.getTranslation(language);
}

function setLanguage(language) {
    return settingsAsyncStorageRequests.setLanguage(language);
}

function getGroup() {
    return settingsAsyncStorageRequests.getGroup();
}

function setGroup(group) {
    return settingsAsyncStorageRequests.setGroup(group);
}

export function getTranslationAsync() {
    return dispatch => {
        return getLanguage()
            .then(response => {
                    getTranslation(response)
                        .then(_response => {
                            dispatch(setTranslationSync(_response));
                        })
                        .catch(_reject => {
                            dispatch({
                                type: ActionTypes.SET_TRANSLATION_NOT_FOUND_ERR
                            })
                        })
            })
            .catch(reject => {
                    dispatch({
                        type: ActionTypes.SET_LANGUAGE_NOT_FOUND_ERR
                    }
                )}
            )
    }
}

export function setLanguageAsync(language) {
    return dispatch => {
        return setLanguage(language).then(
            () => getLanguage()
            .then(response => {
                getTranslation(response)
                .then(_response => {
                    dispatch(setTranslationSync(_response));
                })
                .catch(_reject => {
                    dispatch({
                        type: ActionTypes.SET_TRANSLATION_NOT_FOUND_ERR
                    })
                })
            })
            .catch(reject => {
                dispatch({
                        type: ActionTypes.SET_LANGUAGE_NOT_FOUND_ERR
                    }
                )}
            )
        )};
}

export function getGroupAsync() {
    return dispatch => {
        return getGroup()
            .then(response => {
                dispatch(setGroupSync(response));
            })
            .catch(reject => {
                dispatch({
                    type: ActionTypes.SET_GROUP_NOT_FOUND_ERR
                })
            });
    }
}

export function setGroupAsync(group) {
    return dispatch => {
        return setGroup(group)
        .then(() => getGroup()
            .then(response => {
                dispatch(setGroupSync(response));
            })
            .catch(reject => {
                dispatch({
                    type: ActionTypes.SET_GROUP_NOT_FOUND_ERR
                })
            })
        );
    }
}