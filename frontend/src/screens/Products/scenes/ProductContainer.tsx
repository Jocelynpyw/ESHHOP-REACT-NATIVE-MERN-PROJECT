import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCard from '../../../components/ProductItem';
import {colors} from '../../../utils/colors';
import EshopHeader from '../../../components/header';
import ProductSearchContainer from './ProductSearchContainer';
import SwiperComponent from '../../../components/Barner';
import CategoryFilter from '../../Categories/Scenes/CategoryFilter';
import EsEmpty from '../../../components/EmptyThings';

const data = require('../../../assets/data/products.json');
const categorie = require('../../../assets/data/categories.json');

const ProductContainer = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [productFiltered, setProductFiltered] = useState<any[]>([]);
  const [productCtg, setProductCtg] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<String>('');
  const [active, setActive] = useState<Number>();
  const [categories, setCategories] = useState<String[]>([]);
  const [initialState, setInitialState] = useState<String[]>([]);
  useEffect(() => {
    setProducts(data);
    setProductCtg(data);
    setProductFiltered(data);
    setCategories(categorie);
    setInitialState(data);
    setActive(0);
    return () => {
      setProducts([]);
      setCategories([]);
      setInitialState([]);
      setActive(0);
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

  const changeCtg = ctg => {
    {
      ctg === '5f15cdcb4a6642bddc0fe21'
        ? [setProductCtg(initialState), setActive(true)]
        : [
            setProductCtg(products.filter(i => i.category._id === ctg)),
            setActive(true),
          ];
    }
  };
  // console.log('La valeur de celui est : ', productCtg);

  return (
    <View style={styles.container}>
      <EshopHeader logo back getSearchText={getSearchText} />

      {inputValue === '' ? (
        <View style={styles.containerContent}>
          <View style={styles.containerItem}>
            <FlatList
              ListHeaderComponent={() => (
                <View style={styles.listHeader}>
                  <SwiperComponent />
                  <CategoryFilter
                    categories={categories}
                    categoryFilter={changeCtg}
                    productCtg={productCtg}
                    active={active}
                    setActive={setActive}
                  />
                </View>
              )}
              data={productCtg}
              renderItem={({item}) => <ProductCard key={item.id} item={item} />}
              keyExtractor={item => item.name}
              numColumns={2}
              ListEmptyComponent={<EsEmpty message="No thing Available" />}
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
  listHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
