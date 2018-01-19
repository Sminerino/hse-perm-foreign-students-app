import React from 'react'
import { StackNavigator } from 'react-navigation';
import { AllNews } from "./Screens/AllNews/AllNews";
import { NewsInstance } from "./Screens/NewsInstance/NewsInstance";

export const NewsStackNavigator = ({navigation}) => {
    const NewsStackNavigator = StackNavigator({
            NewsInstance: {
                screen: NewsInstance,
            },
            AllNews: {
                screen: AllNews,
            },
        },
        {
            headerMode: 'none'
        }
    );
    return <NewsStackNavigator screenProps={{drawerNav: navigation}}/>;
};

