import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../utils/colors';
import EshopHeader from '../../../components/header';

const ProductDetails = props => {
  const [item, setItem] = useState<any>({});
  useEffect(() => {
    setItem(props.route.params.item);
  }, []);

  console.log('Les props sont : ', item);

  //   const [item, setItem] = useState('');
  return (
    <View style={styles.container}>
      <EshopHeader back />
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={{
            uri: 'https://www.je-buy.com/uploads/articles/2022-05-09_08-57-07-DEM-1.jpg',
          }}
        />
      </View>
      <Text>{props.route.params.item.name}</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.app.white,
  },
  imageContainer: {
    height: 300,
    width: '100%',
    // backgroundColor: 'lime',
  },
});
