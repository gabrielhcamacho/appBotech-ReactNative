import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


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

import { Welcome } from './src/pages/Welcome';
import {AppRoutes} from './src/routes/app.routes'
import TopTabNavigator from './src/routes/TopBarNavigator'


export default function App() {
  
  const [fontsLoaded] = useFonts({
    
  });

  if(!fontsLoaded) {
    <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>

      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>


      <StatusBar barStyle="light-content"/>
    {/* <Welcome/> */}
    </ThemeProvider>
  );
}
