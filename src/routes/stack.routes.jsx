import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ClubInside } from '../pages/ClubInside';
import { HomeClubs } from '../pages/Home/HomeClubs';
import { Welcome } from '../pages/Welcome';
import { HomeFeed } from '../pages/Home/HomeFeed';

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="Welcome"
                component={Welcome}
            />
            <Screen
                name="HomeFeed"
                component={HomeFeed}
            />
            <Screen
                name="HomeClubs"
                component={HomeClubs}
            />
            <Screen
                name="ClubInside"
                component={ClubInside}
            />
        </Navigator>
    )
}