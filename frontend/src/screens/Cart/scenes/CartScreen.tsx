import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import EshopHeader from '../../../components/header';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../../utils/colors';
import CardItem from '../../../components/cardItem';
import {clearCart} from '../../../redux/slices/cartSlice';
import EsEmpty from '../../../components/EmptyThings';
import {useNavigation} from '@react-navigation/native';

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cart = useSelector(state => state.cart);
  var total = 0;
  cart.forEach(element => {
    total += element.item.price;
  });
  // console.log('Le state de mon redux est : ', cart);
  return (
    <View style={styles.containerj}>
      <EshopHeader back />
      <SafeAreaView style={styles.container}>
        {cart.length == 0 ? (
          <EsEmpty />
        ) : (
          <FlatList
            data={cart}
            renderItem={({item}) => <CardItem cardItem={item} />}
            keyExtractor={item => item.item._id}
          />
        )}
      </SafeAreaView>
      <View style={styles.bottomBox}>
        <View>
          <Text> TOTAL: {total} XAF</Text>
        </View>
        <View style={styles.clearandcheck}>
          <TouchableOpacity
            onPress={() => {
              dispatch(clearCart());
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>CLEAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('checkout')}>
            <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 18}}>
              CHECKOUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  containerj: {
    flex: 1,
    backgroundColor: 'lime',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.app.white,
    // backgroundColor: 'lime',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 5,
    width: '100%',
  },
  containerItem: {
    height: 300,
    width: 400,
    backgroundColor: colors.app.DEFAULT_GREEN,
  },
  bottomBox: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clearandcheck: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
