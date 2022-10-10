import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCard from '../../../components/ProductItem';
import {colors} from '../../../utils/colors';
import EshopHeader from '../../../components/header';
import ProductSearchContainer from './ProductSearchContainer';
import SwiperComponent from '../../../components/Barner';

const data = require('../../../assets/data/products.json');

const ProductContainer = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [productFiltered, setProductFiltered] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<String>('');
  useEffect(() => {
    setProducts(data);
    setProductFiltered(data);
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

  const getSearchText = (dataSearch: string) => {
    setInputValue(dataSearch);
    searchProduct(dataSearch);
  };

  return (
    <View style={styles.container}>
      <EshopHeader logo back getSearchText={getSearchText} />

      {inputValue === '' ? (
        <View style={styles.containerContent}>
          <View style={styles.containerItem}>
            <FlatList
              ListHeaderComponent={() => <SwiperComponent />}
              data={products}
              renderItem={({item}) => <ProductCard key={item.id} item={item} />}
              keyExtractor={item => item.name}
              numColumns={2}
            />
          </View>
        </View>
      ) : (
        <View>
          <ProductSearchContainer productFiltered={productFiltered} />
        </View>
      )}
    </View>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.app.grey,
    alignItems: 'center',
  },
  containerContent: {
    borderRadius: 20,
    marginTop: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  containerItem: {
    // backgroundColor: 'lime',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
