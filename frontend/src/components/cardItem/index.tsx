import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {deleteToCart} from '../../redux/slices/cartSlice';

var {width} = Dimensions.get('window');

const CardItem = ({cardItem}: any) => {
  const dispatch = useDispatch();
 
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: 'https://www.je-buy.com/uploads/articles/2022-05-09_08-57-07-DEM-1.jpg',
          }}
          // source={{
          //   uri: props.item.image
          //     ? props.item.image
          //     : 'https://www.je-buy.com/uploads/articles/2022-05-09_08-57-07-DEM-1.jpg',
          // }}
        />
      </View>
      <View style={styles.containerText}>
        <View style={styles.textRightContainer}>
          <Text style={styles.carditemName}>{cardItem?.item.name} </Text>
          <Text>
            <Text>XAF </Text>
            <Text>{cardItem?.item.price}</Text>
          </Text>
          <Text>Trhee</Text>
        </View>
        <View style={styles.textLeftContainer}>
          <TouchableOpacity
            onPress={() => {
              dispatch(deleteToCart(cardItem?.item._id));
            }}>
            <FontAwesome5 name="delete" color="red" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    width: '98%',
    height: 100,
    backgroundColor: 'yellow',
    marginVertical: 3,
    padding: 10,
    borderRadius: 10,

    // position: 'absolute',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1.41,
    // elevation: 0.1,
  },
  containerImage: {
    width: '30%',
    // backgroundColor: 'green',
  },

  containerText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
    alignItems: 'center',
    padding: 10,
  },
  textRightContainer: {},
  textLeftContainer: {},
  image: {
    width: '100%',
    height: '100%',

    borderRadius: 10,
  },
  carditemName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
