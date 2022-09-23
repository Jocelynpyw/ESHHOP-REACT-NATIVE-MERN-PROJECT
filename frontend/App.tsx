import React from 'react';
import {StyleSheet, View} from 'react-native';
import Hello from './src/components/hello';
// import Hello from ';

const App = () => {
  return (
    <View style={styles.container}>
      <Hello />
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
