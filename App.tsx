import {StatusBar} from 'react-native';
import React from 'react';
import {ThemeProvider} from 'styled-components'
import AppLoading from 'expo-app-loading'

import { Dashboard } from './src/pages/Welcome';
import theme from './src/global/styles/theme';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold

} from '@expo-google-fonts/montserrat'


export default function App() {
  const [fontsLoaded] = useFonts({
    
  });

  if(!fontsLoaded) {
    <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content"/>
    <Dashboard/>
    </ThemeProvider>
  );
}
