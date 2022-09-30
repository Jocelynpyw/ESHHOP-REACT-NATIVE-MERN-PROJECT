import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {logo} from '../../utils/images';
import {colors} from '../../utils/colors';
import EsInput from '../input';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface Props {
  logo?: boolean;
  logoCenter?: boolean;
  back?: boolean;
}

const EshopHeader: FunctionComponent<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {props.back && (
          <TouchableOpacity style={styles.btnBack}>
            <FontAwesome5 name="arrow-left" key={123} size={20} color="white" />
          </TouchableOpacity>
        )}
        {props.logo && (
          <Image source={logo} resizeMode="contain" style={styles.imageStyle} />
        )}
      </View>

      <EsInput icon iconName="search" />
    </View>
  );
};

export default EshopHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.app.red,
  },
  imageStyle: {
    height: 45,
  },
  logoContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBack: {
    position: 'absolute',
    left: 5,
  },
});
