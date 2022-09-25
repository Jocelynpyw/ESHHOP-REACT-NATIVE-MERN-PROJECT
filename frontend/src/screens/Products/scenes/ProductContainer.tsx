import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCard from '../../../components/ProductItem';
import {colors} from '../../../utils/colors';

const data = require('../../../assets/data/products.json');

const ProductContainer = () => {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductCard key={item.id} item={item} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.app.grey,
  },
});
