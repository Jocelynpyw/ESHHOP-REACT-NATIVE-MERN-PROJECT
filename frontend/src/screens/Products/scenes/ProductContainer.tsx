import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCard from '../../../components/ProductItem';
import {colors} from '../../../utils/colors';
import EshopHeader from '../../../components/header';
import ProductSearchContainer from './ProductSearchContainer';

const data = require('../../../assets/data/products.json');

const ProductContainer = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [productFiltered, setProductFiltered] = useState<any[]>([]);
  const [focus, setFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<String>('');
  useEffect(() => {
    setProducts(data);
    setProductFiltered(data);
    setFocus(false);
    return () => {
      setProducts([]);
    };
  }, []);

  const searchProduct = (text: string) => {
    setProductFiltered(
      products.filter(item =>
        item.name.toLowerCase().includes(text.toLocaleLowerCase()),
      ),
    );
  };

  const getSearchText = data => {
    setInputValue(data);
    searchProduct(data);
  };

  return (
    <View style={styles.container}>
      <EshopHeader logo back getSearchText={getSearchText} />
      {inputValue === '' ? (
        <FlatList
          data={products}
          renderItem={({item}) => <ProductCard key={item.id} item={item} />}
          keyExtractor={item => item.name}
        />
      ) : (
        <ProductSearchContainer productFiltered={productFiltered} />
      )}
    </View>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.app.grey,
  },
});
