import { connect } from 'react-redux';
import { AllNews } from "../../../Screens/News/Screens/AllNews/AllNews";
//temp for testing
import { setNewsSync } from "../../Actions/newsActions";
//temp for testing

const mapStateToProps = (state, ownProps) => {
    return {
        translation: state.translation.NEWS,
        news: state.news,
        navigation: ownProps.navigation,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateNews: () => {

        },
        getMoreNews: () => {

        },
        //temp for testing:
        addNews: (news) => {
            dispatch(setNewsSync(news));
        },
        //temp for testing
        toggleDrawer: () => {
            ownProps.screenProps.drawerNav.navigate('DrawerToggle');
        }
    };
};

export const NewsContainer =
    connect(mapStateToProps, mapDispatchToProps)(AllNews);