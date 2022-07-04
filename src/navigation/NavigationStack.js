import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import DetailsSceeen from '../screens/DetailsScreen'

const Stack = createStackNavigator();

export default function NavigationStack() {
    return (
        <Stack.Navigator screenOptions={
            {headerTitleAlign: 'center', headerStyle: { backgroundColor: '#fff'}}
            }>
            <Stack.Screen name="Text Miracles" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsSceeen} />
        </Stack.Navigator>
    )
}
