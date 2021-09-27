import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'

import theme from './src/global/styles/theme';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold

} from '@expo-google-fonts/montserrat'


import { AppRoutes } from './src/routes/app.routes'
import { Welcome } from './src/pages/Welcome';
import { HomeClubs } from './src/pages/Home/HomeClubs';
import { ClubInside } from './src/pages/ClubInside';

const Stack = createStackNavigator();


export default function App() {

  const [fontsLoaded] = useFonts({

  });

  if (!fontsLoaded) {
    <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>

      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>


      <StatusBar barStyle="light-content" />
      {/* <Welcome/> */}
    </ThemeProvider>
  );
}