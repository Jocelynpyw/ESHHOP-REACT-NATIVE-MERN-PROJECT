import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/colors';
import Display from '../../utils/Display';
import {
  addToCart,
  decreaseCartQuantity,
  deleteToCart,
} from '../../redux/slices/cartSlice';
var {width} = Dimensions.get('window');

const CardItem = ({cardItem}: any) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.je-buy.com/uploads/articles/2022-05-09_08-57-07-DEM-1.jpg',
          }}
        />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.titleDelete}>
            <Text numberOfLines={1} style={styles.titleText}>
              {cardItem?.item.name}
            </Text>

            <TouchableOpacity onPress={() => dispatch(deleteToCart(cardItem))}>
              <AntDesign
                name="delete"
                color={colors.app.DEFAULT_YELLOW}
                size={18}
              />
            </TouchableOpacity>
          </View>

          <Text numberOfLines={2} style={styles.descriptionText}>
            {cardItem?.item.description}
          </Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.priceText}>XAF {cardItem?.item.price}</Text>
          <View style={styles.itemAddContainer}>
            {/* {itemCount > 0 ? ( */}
            <>
              <TouchableOpacity
                onPress={() => dispatch(decreaseCartQuantity(cardItem))}>
                <AntDesign
                  name="minus"
                  color={colors.app.DEFAULT_YELLOW}
                  size={18}
                />
              </TouchableOpacity>

              {/* <Text style={styles.itemCountText}>{itemCount}</Text> */}
              <Text style={styles.itemCountText}>{cardItem.quantity}</Text>
            </>
            {/* ) : null} */}
            <TouchableOpacity onPress={() => dispatch(addToCart(cardItem))}>
              <AntDesign
                name="plus"
                color={colors.app.DEFAULT_YELLOW}
                size={18}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
    backgroundColor: colors.app.LIGHT_GREY,
  },
  image: {
    height: 100,
    width: 100,
    margin: 6,
    borderRadius: 8,
  },
  detailsContainer: {
    marginHorizontal: 5,
  },
  titleText: {
    width: Display.setWidth(50),
    color: colors.app.DEFAULT_BLACK,
    // fontFamily: Fonts.POPPINS_BOLD,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    marginBottom: 8,
  },
  descriptionText: {
    width: Display.setWidth(60),
    color: colors.app.DEFAULT_GREY,
    // fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: 10,
    lineHeight: 10 * 1.4,
    marginBottom: 8,
  },
  priceText: {
    color: colors.app.DEFAULT_YELLOW,
    // fontFamily: Fonts.POPPINS_BOLD,
    fontSize: 14,
    lineHeight: 14 * 1.4,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  itemAddContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.app.LIGHT_GREY2,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  itemCountText: {
    color: colors.app.DEFAULT_BLACK,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 14,
    lineHeight: 14 * 1.4,
    marginHorizontal: 8,
  },
  titleDelete: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
