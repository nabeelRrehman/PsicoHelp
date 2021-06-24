import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import TabBarComponent from '../component/TabBar';
import Asistencia from '../screens/Asistencia';
import PlanPremium from '../screens/PlanPremium';
import Profile from '../screens/Profile';
import Foro from '../screens/Foro';
import Sabias from '../screens/Sabias';
import Information from '../screens/Information';
import ForoSecond from '../screens/ForoSecond';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => (
        <TabBarComponent
          activeIndex={props.state.index}
          routeName={props.state.routeNames}
          navigation={props.navigation}
        />
      )}
      initialRouteName={'Home'}
      screenOptions={{}}>
      <Tab.Screen name="Sabias" component={Sabias} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Asistencia" component={Asistencia} />
      <Tab.Screen name="PlanPremium" component={PlanPremium} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Foro" component={Foro} />
      <Tab.Screen name="Information" component={Information} />
      <Tab.Screen name="ForoSecond" component={ForoSecond} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
