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

const CartScreen = () => {
  const dispatch = useDispatch();
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
        <FlatList
          data={cart}
          renderItem={({item}) => <CardItem cardItem={item} />}
          keyExtractor={item => item.item._id}
        />
      </SafeAreaView>
      <View style={styles.bottomBox}>
        <View>
          <Text> TOTAL: {total} XAF</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              dispatch(clearCart());
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>CLEAR</Text>
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
    backgroundColor: 'red',
  },
  bottomBox: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
