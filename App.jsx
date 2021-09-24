import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {StatusBar} from 'react-native';
import React from 'react';
import {ThemeProvider} from 'styled-components'
import AppLoading from 'expo-app-loading'

import theme from './src/global/styles/theme';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold

} from '@expo-google-fonts/montserrat'


import {AppRoutes} from './src/routes/app.routes'
import { Welcome } from './src/pages/Welcome';
import { HomeFeed } from './src/pages/Home/HomeFeed';
import { ClubInside } from './src/pages/ClubInside';
import { HomeClubs } from './src/pages/Home/HomeClubs';

const Stack = createStackNavigator();

export default function App() {
  
  const [fontsLoaded] = useFonts({
    
  });

  if(!fontsLoaded) {
    <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>

      <NavigationContainer>
        {/* <Stack.Navigator initialRoute="Welcome">
          <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
          <Stack.Screen name="HomeFeed" component={HomeClubs}/>
          <Stack.Screen name="ClubInside" component={ClubInside}/>
        </Stack.Navigator> */}
        <AppRoutes/>
      </NavigationContainer>


      <StatusBar barStyle="light-content"/>
    {/* <Welcome/> */}
    </ThemeProvider>
  );
}
