import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../utils/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../../redux/slices/cartSlice';

const ProductDetails = props => {
  const dispatch = useDispatch();
  const [item, setItem] = useState<any>({});
  useEffect(() => {
    setItem(props.route.params.item);
  }, []);
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      {/* <EshopHeader back /> */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.app.DEFAULT_WHITE}
        // translucent
      />
      <View style={styles.imageContainer}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5
              name="arrow-left"
              key={123}
              size={20}
              color={colors.app.red}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5
              name="heart"
              key={123}
              size={20}
              color={colors.app.red}
            />
          </TouchableOpacity>
        </View>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: 'https://www.je-buy.com/uploads/articles/2022-05-09_08-57-07-DEM-1.jpg',
          }}
        />
      </View>
      <View style={styles.textcontent}>
        <View>
          <View style={styles.detailsTopContainer}>
            <Text style={styles.detailText}>{item.name}</Text>
            <TouchableOpacity>
              <FontAwesome5
                name="share"
                key={123}
                size={20}
                color={colors.app.red}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.detailsTopContainer}>
            <Text style={styles.detailText}>Details</Text>
          </View>
          <Text>{item.description}</Text>
        </View>

        <View style={styles.bottomInfosContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}> {item.price} XAF</Text>
            <Text style={styles.totalPayable}>TOTAL PAYBLE</Text>
          </View>
          <TouchableOpacity
            onPress={() => dispatch(addToCart(props.route.params))}>
            <View style={styles.btnStyle}>
              <Text style={styles.addToCartText}>Add To Cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.app.white,
    // height: '100%',
  },
  imageContainer: {
    height: 210,
    width: '100%',
    padding: 10,
    marginTop: 20,
  },
  image: {
    height: 180,
  },
  textcontent: {
    backgroundColor: '#EDF3F3',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    flex: 1,
    elevation: 2,
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 10,
  },
  btnStyle: {
    width: 150,
    paddingVertical: 15,
    backgroundColor: colors.app.red,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  bottomInfosContainer: {
    width: Dimensions.get('screen').width,
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.black,
  },
  addToCartText: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.text.white,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  totalPayable: {
    color: '#BFBFBF',
  },
  detailText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
    color: colors.text.black,
  },
  detailsTopContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
