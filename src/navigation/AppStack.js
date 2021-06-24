import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import Theme1 from 'app/src/assets/theme1/theme';
import AuthStackScreens from './AuthStack';
import TabStackScreens from './TabNavigator';
import {navigationRef, isReadyRef} from './RootNavigation';

import StackScreens from './StackScreens';

const RootStack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer
      // theme={{colors: Theme1}}
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <RootStack.Navigator
        initialRouteName={'AuthStackScreens'}
        screenOptions={{headerShown: false}}>
        {StackScreens({name: 'AuthStackScreens', component: AuthStackScreens})}
        {StackScreens({name: 'TabStackScreens', component: TabStackScreens})}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
