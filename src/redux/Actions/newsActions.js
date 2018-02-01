import { ActionTypes } from "../ActionTypes/actionTypes";
import { newsAsyncStorageRequests } from "../../AsyncStorageRequests/news/news";

export function setNewsSync(news) {
    return {
        type: ActionTypes.SET_ALL_NEWS,
        news
    }
}

export function setViewedNewsPieceSync(newsPiece) { //exported only during development
    return {
        type: ActionTypes.SET_VIEWED_NEWS_PIECE,
        newsPiece
    }
}

function requestAllNewsAsync() {
    return newsAsyncStorageRequests.getAllNews();
}

function requestViewedNewsPieceAsync(id) {
    return newsAsyncStorageRequests.getNewsPiece(id);
}

function getNewsPieceFromApi(id) {
    //a request to server
}

export function fillNewsAsyncFromApi(language) {
    //fill async storage from api
}

export function fillViewedNewsPieceFromApi(id, language) {
    //fill async storage from api
}

export function setAllNewsAsync() {
    return dispatch => {
        return requestAllNewsAsync()
            .then(response => {
                if(response)
                    dispatch(setNewsSync(response));
                else
                    dispatch({
                        type: ActionTypes.SET_ALL_NEWS_NOT_FOUND_ERR
                    })
            })
    }
}

export function setViewedNewsPieceApi(id) {
    return dispatch => {
        return getNewsPieceFromApi(id)
            .then(response => {
                if(response)
                    dispatch(getNewsPieceFromApi(id));
                else
                    dispatch({
                        type: ActionTypes.SET_VIEWED_NEWS_PIECE_NOT_FOUND_ERR
                    })
            })
    }
}