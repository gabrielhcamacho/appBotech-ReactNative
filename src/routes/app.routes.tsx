import React from 'react';
import {Platform} from 'react-native'

import {Entypo} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useTheme} from 'styled-components'
import { Ionicons } from '@expo/vector-icons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Welcome} from '../pages/Welcome'
import {HomeFeed} from '../pages/Home/HomeNav'
import {Profile} from '../pages/Profile'
import {Explore} from '../pages/Explore'
import {ClubInside} from '../pages/ClubInside'

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
    const theme = useTheme();
    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.grey,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.colors.backgroundTabBar,
                    borderTopColor: theme.colors.background,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 88,
                  }
            }}
            
        >
            <Screen 
                name="Home"
                component={HomeFeed}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <Entypo name="home"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            
            <Screen 
                name="Explore"
                component={Explore}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialCommunityIcons name="telescope"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Screen 
                name="Club"
                component={ClubInside}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <Ionicons name="ios-beer"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Screen 
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <AntDesign name="user"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            

        </Navigator>
    )
}