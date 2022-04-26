import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Home } from './src/screens/Home';
import theme from './src/global/styles/themes'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';
import { PresetForm } from './src/screens/PresetForm';

export default function App() {

  const [fontsLoaded] = useFonts({  
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
        <Home/>
    </ThemeProvider>
  );
}
