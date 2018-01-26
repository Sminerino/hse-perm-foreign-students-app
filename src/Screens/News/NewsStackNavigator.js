import React from 'react'
import { StackNavigator } from 'react-navigation';
import { AllNews } from "./Screens/AllNews/AllNews";
import { NewsContainer } from "../../redux/Containers/AllNews/AllNewsContainer";
import { NewsInstanceContainer } from "../../redux/Containers/NewsInstance/NewsInstanceContainer";

export const NewsStackNavigator = ({navigation}) => {
    const NewsStackNavigator = StackNavigator({
            AllNews: {
                screen: NewsContainer,
            },
            NewsInstance: {
                screen: NewsInstanceContainer,
            },
        },
        {
            headerMode: 'none'
        }
    );
    return <NewsStackNavigator screenProps={{drawerNav: navigation}}/>;
};

