import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProductContainer from './src/screens/Products/scenes/ProductContainer';

const App = () => {
  return (
    <View style={styles.container}>
      <ProductContainer />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
