import React from 'react'
import { StackNavigator } from 'react-navigation';

export const NewsStackNavigator = (wrapperProps) => {
    const WrappedNavigator = StackNavigator({
            NewsInstance: {
                screen: NewsTile,
            },
            AllNews: {
                screen: News,
            },
        },
        {
            headerMode: 'none'
        }
    );
    return <WrappedNavigator
        screenProps = {{ ...wrapperProps.screenProps, drawerNavigation: wrapperProps.navigation }}
    />;
};

