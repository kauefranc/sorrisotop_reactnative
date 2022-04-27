import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';

import theme from './src/global/styles/themes'
import {
    useFonts,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
} from '@expo-google-fonts/roboto'

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
            <Routes/>
        </ThemeProvider>
    );
}
