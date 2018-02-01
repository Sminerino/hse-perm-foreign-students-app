import { connect } from 'react-redux';
import { setViewedNewsPieceApi } from "../../Actions/newsActions";
import { NewsInstance } from "../../../Screens/News/Screens/NewsInstance/NewsInstance";
import { setViewedNewsPieceSync } from "../../Actions/newsActions";

import {newsText} from "../../../MocksRes/newsText";

const mapStateToProps = (state, ownProps) => {
    return {
        newsPiece: state.viewedNewsPiece,
        neededId: ownProps.navigation.state.params.newsId,
        title: ownProps.navigation.state.params.title,
        goBack: () => {
            ownProps.navigation.goBack();
        }
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        requestNewsInstance: () => {
            //dispatch(setViewedNewsPieceApi(ownProps.navigation.state.params.newsId));
            dispatch(setViewedNewsPieceSync({
                id: 0,
                title: '',
                date: '12.12.17',
                text: newsText,
                images: [
                    {
                        thumb: 'https://pp.userapi.com/c834404/v834404988/a7248/22sodgVE65w.jpg',
                        source: 'https://pp.userapi.com/c834404/v834404988/a7248/22sodgVE65w.jpg'

                    },
                    {
                        thumb: 'https://pp.userapi.com/c834404/v834404988/a724f/EEIv2iXqdeE.jpg',
                        source: 'https://pp.userapi.com/c834404/v834404988/a724f/EEIv2iXqdeE.jpg'
                    },
                    {
                        thumb: 'https://pp.userapi.com/c834404/v834404988/a7256/ZR8w2QrWEe0.jpg',
                        source: 'https://pp.userapi.com/c834404/v834404988/a7256/ZR8w2QrWEe0.jpg'
                    },
                    {
                        thumb: 'https://pp.userapi.com/c834404/v834404988/a7248/22sodgVE65w.jpg',
                        source: 'https://pp.userapi.com/c834404/v834404988/a7248/22sodgVE65w.jpg'

                    },
                    {
                        thumb: 'https://pp.userapi.com/c834404/v834404988/a724f/EEIv2iXqdeE.jpg',
                        source: 'https://pp.userapi.com/c834404/v834404988/a724f/EEIv2iXqdeE.jpg'
                    },
                    {
                        thumb: 'https://pp.userapi.com/c834404/v834404988/a7256/ZR8w2QrWEe0.jpg',
                        source: 'https://pp.userapi.com/c834404/v834404988/a7256/ZR8w2QrWEe0.jpg'
                    }
                    ],
            }));
        },

    }
};

export const NewsInstanceContainer =
    connect(mapStateToProps, mapDispatchToProps)(NewsInstance);