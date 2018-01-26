import { connect } from 'react-redux';
import { setViewedNewsPieceApi } from "../../Actions/newsActions";
import { NewsInstance } from "../../../Screens/News/Screens/NewsInstance/NewsInstance";

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
        },

    }
};

export const NewsInstanceContainer =
    connect(mapStateToProps, mapDispatchToProps)(NewsInstance);