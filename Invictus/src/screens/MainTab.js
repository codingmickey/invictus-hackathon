import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock, faAirFreshener, faAnchor } from '@fortawesome/free-solid-svg-icons';

import Profile from './Profile';
import Vendor from './Vendor';
import Customer from './Customer';
import Orders from './Orders';

const Tab = createMaterialBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator initialRouteName="Customer" activeColor="#fff">
      <Tab.Screen
        name="Customer"
        component={Customer}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="people-arrows" color="#1B262C" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Vendor"
        component={Vendor}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search-dollar" color="#1B262C" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: 'My Orders',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shopping-cart" color="#1B262C" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" color="#1B262C" size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
