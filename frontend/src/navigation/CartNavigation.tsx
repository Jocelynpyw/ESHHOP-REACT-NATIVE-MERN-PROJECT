import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/Cart/scenes/CartScreen';
import CheckoutNavigation from './CheckoutTabNavivator';
import AddpaymentScreen from '../screens/Checkout/scenes/addpaymentScreen';
import ShippingScreen from '../screens/Checkout/scenes/ShippingScreen';

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
      <Stack.Screen
        name="addPayment"
        component={AddpaymentScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="shippingAdress"
        component={ShippingScreen}
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
