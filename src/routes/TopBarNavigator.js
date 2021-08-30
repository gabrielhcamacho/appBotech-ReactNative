import * as React from 'react'
import {Text, View, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {useTheme} from 'styled-components'
import theme from '../global/styles/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {HomeClubs} from '../pages/Home/HomeClubs'

function Feed(){
    return(
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text style={{fontSize: 20, color: theme.colors.textBlack}}
            >This is the Feed</Text>
        </View>
    )
}

function Clubs(){
    return(
        <HomeClubs/>
    )
}



const Tab = createMaterialTopTabNavigator();

function MyTabs(){

    const insets = useSafeAreaInsets()
    return(

        <Tab.Navigator
            initialRouteNAme="Feed"
            tabBarOptions={{
                activeTintColor: theme.colors.secondary,
                inactiveTintColor: theme.colors.grey,
                labelStyle: {fontSize:16, fontWeight: 'bold'},
                style: {marginTop: insets.top,  backgroundColor: theme.colors.background},
                
            }}
        >
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{tabBarLabel: 'Feed'}}
            />
            <Tab.Screen
                name="Clubs"
                component={Clubs}
                options={{tabBarLabel: 'Clubs'}}
            />

        </Tab.Navigator>
    )
}

export default function TopTabNavigator(){
    return <MyTabs/>
    
}