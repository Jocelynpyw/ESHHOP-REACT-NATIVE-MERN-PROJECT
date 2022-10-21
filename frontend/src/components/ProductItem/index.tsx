import {
  Button,
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React, {FunctionComponent} from 'react';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

interface Props {
  item: {
    name: string;
    brand: string;
    id: string;
    price: number;
    countInStock: number;
    image: ImageSourcePropType;
    // image?: ImageSourcePropType;
  };
}
var {width} = Dimensions.get('window');

const ProductCard: FunctionComponent<Props> = (props: Props) => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Product Details', {item: props.item})
      }>
      <View style={styles.container}>
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
        <View style={styles.card}>
          <Text style={styles.title}>
            {props.item.name.length > 15
              ? props.item.name.substring(0, 15 - 3) + '...'
              : props.item.name}
          </Text>
          <Text style={styles.price}>{props.item.price} XAF</Text>
          {props.item.countInStock > 0 ? (
            <View style={styles.viewButton}>
              <Button title="Add" color={'green'} />
            </View>
          ) : (
            <Text style={styles.unavailableText}>Currently Unavailable</Text>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 7,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    backgroundColor: colors.app.white,
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,

    top: -45,
    borderRadius: 10,
  },
  card: {
    marginBottom: 10,
    height: width / 3 - 20 - 9,
    width: width / 2 - 20 - 10,
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: 'orange',
    marginVertical: 10,
  },
  viewButton: {
    marginBottom: 20,
  },
  btnAdd: {
    color: 'green',
  },
  unavailableText: {
    marginTop: 20,
  },
});
