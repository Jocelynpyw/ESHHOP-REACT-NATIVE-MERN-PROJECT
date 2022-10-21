import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductContainer from '../screens/Products/scenes/ProductContainer';
import ProductDetails from '../screens/Products/scenes/ProductDetails';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home "
        component={ProductContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductDetails}
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
