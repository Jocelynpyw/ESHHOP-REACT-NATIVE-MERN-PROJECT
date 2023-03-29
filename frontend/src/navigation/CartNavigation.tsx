import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CheckoutScreen from '../screens/Checkout/scenes/CheckoutScreen';
import CartScreen from '../screens/Cart/scenes/CartScreen';
import CheckoutNavigation from './CheckoutTabNavivator';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cart"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="checkout"
        component={CheckoutNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigation() {
  return <MyStack />;
}