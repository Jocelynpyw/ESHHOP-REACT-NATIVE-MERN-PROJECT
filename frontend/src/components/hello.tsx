import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Hello = () => {
  return (
    <View style={styles.container}>
      <Text>Mael c'est le laid bebe de la terre qui dit mieux ? </Text>
    </View>
  );
};

export default Hello;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
