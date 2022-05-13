import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { propsNavigationStack } from './Models'


import { Home } from '../../screens/Home'
import { PresetForm } from '../../screens/PresetForm'
import { Form1 } from '../../screens/Form1'
import { Form2 } from '../../screens/Form2'

const { Navigator, Screen }: any = createNativeStackNavigator<propsNavigationStack>();

export function Stack () {
    return (
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home}/>
            <Screen name="PresetForm" component={PresetForm}/>
            <Screen name="Form1" component={Form1}/>
            <Screen name="Form2" component={Form2}/>
        </Navigator>
    )
}