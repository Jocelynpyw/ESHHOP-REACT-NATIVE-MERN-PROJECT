import {Image, SafeAreaView, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import {logo} from '../../utils/images';
import {colors} from '../../utils/colors';

interface Props {
  logo?: boolean;
  logoCenter?: boolean;
}

const Header: FunctionComponent<Props> = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      {props.logo && (
        <Image source={logo} resizeMode="contain" style={[styles.imageStyle]} />
      )}
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: colors.app.red,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  imageStyle: {
    height: 50,
  },
});
