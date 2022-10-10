import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {emptySearch} from '../../../utils/images';
import ProductSearchItem from '../../../components/ProductSearchItem';
import {colors} from '../../../utils/colors';

const ProductSearchContainer = (props: any) => {
  const {productFiltered} = props;

  return (
    <View style={styles.container}>
      {productFiltered.length > 0 ? (
        <FlatList
          data={productFiltered}
          renderItem={({item}) => (
            <ProductSearchItem key={item.id} item={item} />
          )}
          keyExtractor={item => item.name}
        />
      ) : (
        <View style={styles.nothingContainer}>
          <Image
            source={emptySearch}
            resizeMode="contain"
            style={styles.emptyImageStyle}
          />
          <Text>No thing available</Text>
        </View>
      )}
      {/* <Text>ProductSearchContainer</Text> */}
    </View>
  );
};

export default ProductSearchContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    display: 'flex',
    padding: 10,
    backgroundColor: colors.app.white,
    width: Dimensions.get('screen').width,
  },
  nothingContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 2,
    height: 400,
    // backgroundColor: 'lime',
  },
  emptyImageStyle: {
    width: 200,
  },
});
