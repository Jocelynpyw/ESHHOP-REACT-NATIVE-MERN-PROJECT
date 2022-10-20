import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {FunctionComponent} from 'react';
import {colors} from '../../utils/colors';
import {emptySearch} from '../../utils/images';
interface IEmpty {
  message?: string;
}

const EsEmpty: FunctionComponent<IEmpty> = (props: IEmpty) => {
  return (
    <View style={styles.nothingContainer}>
      <Image
        source={emptySearch}
        resizeMode="contain"
        style={styles.emptyImageStyle}
      />
      <Text>{props.message}</Text>
    </View>
  );
};

export default EsEmpty;

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
