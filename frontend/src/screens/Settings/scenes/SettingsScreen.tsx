import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EshopHeader from '../../../components/header';
import SimpleHeader from '../../../components/SimpleHeader';
import {useNavigation} from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <SimpleHeader back title="Settings" />
      {/* <EshopHeader back /> */}
      <Text>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
