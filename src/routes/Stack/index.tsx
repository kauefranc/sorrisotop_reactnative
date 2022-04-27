import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { propsNavigationStack } from './Models'


import { Home } from '../../screens/Home'
import { PresetForm } from '../../screens/PresetForm'
import { Form1 } from '../../screens/Form1'

const { Navigator, Screen }: any = createNativeStackNavigator<propsNavigationStack>();

export function Stack () {
    return (
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home}/>
            <Screen name="PresetForm" component={PresetForm}/>
            <Screen name="Form1" component={Form1}/>
        </Navigator>
    )
}