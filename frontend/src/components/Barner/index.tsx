import React, {Component} from 'react';
import {AppRegistry, Dimensions, Image, StyleSheet, View} from 'react-native';

import Swiper from 'react-native-swiper';

export default class SwiperComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} loop autoplay autoplayTimeout={10}>
          <Image
            source={require('../../assets/images/image_1.jpg')}
            style={styles.image}
            resizeMode="center"
          />
          <Image
            source={require('../../assets/images/image_2.jpg')}
            style={styles.image}
            resizeMode="center"
          />
          <Image
            source={require('../../assets/images/image_3.jpg')}
            style={styles.image}
            resizeMode="center"
          />
        </Swiper>
      </View>
    );
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent);

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
    borderRadius: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 20,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
});
