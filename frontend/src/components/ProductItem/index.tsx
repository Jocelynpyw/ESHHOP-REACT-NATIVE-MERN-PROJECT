import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FunctionComponent} from 'react';

interface Props {
  item: {name: string; brand: string; id: any};
}
var {width} = Dimensions.get('window');

const ProductCard: FunctionComponent<Props> = (props: Props) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View>
      <View style={{width: width / 2, backgroundColor: 'lime'}}>
        <TouchableOpacity style={{backgroundColor: 'red'}}>
          <View style={styles.container}>
            <Image style={styles.image} />
            <Text>{props.item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
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
    marginLeft: 10,
    alignItems: 'center',
    elevation: 8,
    // backgroundColor: colors.app.white,
    backgroundColor: 'lime',
  },
  image: {},
});
