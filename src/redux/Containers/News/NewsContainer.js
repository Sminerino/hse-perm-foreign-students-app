import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        translation: state.translation.NEWS,
        news: state.news,
        drawerNav: ownProps.screenProps.drawerNav
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateNews: () => {

        },
        getMoreNews: () => {

        },

    };
};

export const NewsContainer =
    connect(mapStateToProps, mapDispatchToProps)();