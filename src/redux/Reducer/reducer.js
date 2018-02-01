import { ActionTypes } from "../ActionTypes/actionTypes";
import { languageGetter } from "../../settings/lang/languageGetter";

const initialState = {
    translation: null,
    group: {
        program: '',
        year: NaN,
        group: NaN,
    },
    news: [],
    /*how news instance looks like:
    * {
    *   id: ''
    *   title: '',
    *   picture: '',
    *   date: '',
    *   thumbnail: '' // link to thumbnail
    * }
    * */
    viewedNewsPiece: {
        id: 0,
        title: '',
        date: '',
        text: '',
        images: [], //contains object with 2 fields: { thumb, source }
        // which both contain link to external image
    },

    viewedTimetableDay: {
        date: '',
        classes: []
        /*how class instance looks like:
        *    {
        *        id: 0
        *        title: '',
        *        teacher: '',
        *        room: 0,
        *        building: 0,
        *    }
        */
    }
};

export function appReducer(state = initialState, action) {
    return {
        translation: translationReducer(state.translation, action),
        group: groupReducer(state.group, action),
        news: newsReducer(state.news, action),
        viewedNewsPiece: viewedNewsPieceReducer(state.viewedNewsPiece, action),
        viewedTimetableDay: viewedTimetableDayReducer(state.viewedTimetableDay, action)
    }
}

function translationReducer(state = initialState.translation, action) {
    switch(action.type) {
        case ActionTypes.SET_TRANSLATION:
            if(action.translation)
                return action.translation;
            return state;
        default: return state;
    }
}

function groupReducer(state = initialState.group, action) {
    switch(action.type) {
        case ActionTypes.SET_GROUP:
            if(action.group)
                return action.group;
            return state;
        default: return state;
    }
}

function newsReducer(state = initialState.news, action) {
    switch(action.type) {
        case ActionTypes.SET_ALL_NEWS:
            if(action.news)
                return action.news;
            return state;
        default: return state;
    }
}

function viewedNewsPieceReducer(state = initialState.viewedNewsPiece, action) {
    switch(action.type) {
        case ActionTypes.SET_VIEWED_NEWS_PIECE:
            if(action.newsPiece)
                return action.newsPiece;
            return state;
        default: return state;
    }
}

function viewedTimetableDayReducer(state = initialState.viewedTimetableDay, action) {
    switch(action.type) {
        case ActionTypes.SET_VIEWED_TIMETABLE_DAY:
            if(action.date && action.classes) {
                let _state = state;
                _state.classes = action.classes;
                _state.date = action.date;
                return _state;
            }
            return state;

        default: return state;
    }
}

