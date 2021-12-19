import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
import Signup from './src/screens/SignUp';
import MainTab from './src/screens/MainTab';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} options={ {headerShown:false} } />
      <Stack.Screen name='SignUp' component={Signup} options={ {headerShown:false} } />
      <Stack.Screen name='MainTab' component={MainTab} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}