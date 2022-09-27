import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ProductContainer from './src/screens/Products/scenes/ProductContainer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductContainer />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
