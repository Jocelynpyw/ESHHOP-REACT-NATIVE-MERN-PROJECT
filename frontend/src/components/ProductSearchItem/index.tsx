import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FunctionComponent} from 'react';
import {colors} from '../../utils/colors';

interface Props {
  item: {
    name: string;
    brand: string;
    id: string;
    price: number;
    countInStock: number;
    image: ImageSourcePropType;
  };
}

const ProductSearchItem: FunctionComponent<Props> = (props: Props) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageContainner}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: props.item.image
                ? props.item.image
                : 'https://www.je-buy.com/uploads/articles/2022-05-09_08-57-07-DEM-1.jpg',
            }}
          />
        </View>
        <View>
          <View>
            <Text>
              {props.item.name.length > 15
                ? props.item.name.substring(0, 15 - 3) + '...'
                : props.item.name}
            </Text>
            <Text style={styles.price}>{props.item.price} XAF</Text>

            <Text>description</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductSearchItem;

const styles = StyleSheet.create({
  container: {
    width: '98%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: colors.app.white,
    marginLeft: 5,
    padding: 5,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  imageContainner: {
    width: '30%',
    height: '100%',
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  price: {
    fontSize: 20,
    color: 'orange',
    marginVertical: 10,
  },
});
