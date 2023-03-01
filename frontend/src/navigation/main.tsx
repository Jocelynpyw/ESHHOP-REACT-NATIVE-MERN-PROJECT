// In App.js in a new project

import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeNavigation from './HomeNavigation';
import CartScreen from '../screens/Cart/scenes/CartScreen';
import SettingsScreen from '../screens/Settings/scenes/SettingsScreen';
import AdminScreen from '../screens/Admins/scenes/AdminScreen';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="home" key={123} size={20} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome5
              name="shopping-cart"
              key={123}
              size={20}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Admin"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="cog" key={123} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={AdminScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user" key={123} size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
