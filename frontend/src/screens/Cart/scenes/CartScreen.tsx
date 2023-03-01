import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import EshopHeader from '../../../components/header';
import {useSelector} from 'react-redux';
import {colors} from '../../../utils/colors';

const CartScreen = () => {
  const cart = useSelector(state => state.cart);
  console.log('Le state de mon redux est : ', cart);
  return (
    <View style={styles.container}>
      <EshopHeader back />
      {/* <Text>{cart[1]?.item.description}</Text> */}
      <SafeAreaView style={styles.container}>
        <FlatList
          data={cart}
          renderItem={({item}) => (
            <View>
              <Text>{item.item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.name}
        />
      </SafeAreaView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.app.white,
  },
  containerItem: {
    height: 300,
    width: 400,
    backgroundColor: 'red',
  },
});
