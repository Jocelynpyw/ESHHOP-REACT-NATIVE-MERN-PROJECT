import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductContainer = () => {
  return (
    <View style={styles.container}>
      <Text>I am in the ProductContainer</Text>
    </View>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
