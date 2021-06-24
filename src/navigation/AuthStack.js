import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import StackScreens from './StackScreens';
import Splash from '../screens/Splash';
import LogIn from '../screens/Login';
import SignUp from '../screens/SignUp';

const AuthStack = createStackNavigator();

export default function AuthStackScreens() {
  return (
    <AuthStack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{headerShown: false}}>
      {StackScreens({name: 'Splash', component: Splash})}
      {StackScreens({name: 'LogIn', component: LogIn})}
      {StackScreens({name: 'SignUp', component: SignUp})}
    </AuthStack.Navigator>
  );
}
