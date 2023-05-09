import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';

import EshopHeader from '../components/header';
import ConfirmScreen from '../screens/Checkout/scenes/ConfirmScreen';
import PaymentScreen from '../screens/Cart/scenes/PaymentScreen';
import ShippingScreen from '../screens/Checkout/scenes/ShippingScreen';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <>
      <View>
        <EshopHeader back />
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Shipping" component={ShippingScreen} />
        <Tab.Screen name="Confirm" component={ConfirmScreen} />
        <Tab.Screen name="Payment" component={PaymentScreen} />
      </Tab.Navigator>
    </>
  );
}

export default function CheckoutNavigation() {
  return <MyTabs />;
}
