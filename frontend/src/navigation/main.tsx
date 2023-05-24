import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="bottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function MainNavigation() {
  return <MyStack />;
}
