import {Image, Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FunctionComponent, useState} from 'react';
import {logo} from '../../utils/images';
import {colors} from '../../utils/colors';
import EsInput from '../input';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

interface Props {
  logo?: boolean;
  logoCenter?: boolean;
  searchBar?: boolean;
  back?: boolean;
  home?: boolean;
  text?: String;
  getSearchText?: (text: string) => void;
}
const EshopHeader: FunctionComponent<Props> = (props: Props) => {
  const navigation = useNavigation<any>();
  const [search, setSearch] = useState<string>();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {props.back && (
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => navigation.goBack()}>
            {/* <Ionicons name="location-outline" size={15} color="#fff" /> */}
            <FontAwesome5 name="arrow-left" key={123} size={20} color="white" />
          </TouchableOpacity>
        )}
        {/* {props.logo && (
          <Image source={logo} resizeMode="contain" style={styles.imageStyle} />
        )} */}
      </View>
      {props.home && (
        <View style={styles.headerContainer}>
          <View style={styles.locationContainer}>
            <View style={styles.locaz}>
              <Ionicons
                name="location-outline"
                size={15}
                color={colors.app.DEFAULT_WHITE}
              />
              <Text style={styles.locationText}>Delivered to</Text>
              <Text style={styles.selectedLocationText}>HOME</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={16}
                color={colors.app.DEFAULT_YELLOW}
              />
            </View>
            <View />
            <View style={{marginTop: -15}}>
              <Feather
                name="bell"
                size={24}
                color={colors.app.DEFAULT_WHITE}
                style={{position: 'absolute', right: 0}}
              />
              <View style={styles.alertBadge}>
                <Text style={styles.alertBadgeText}>12</Text>
              </View>
            </View>
          </View>
        </View>
      )}

      {props.searchBar && (
        <EsInput
          icon
          iconName="search-outline"
          placeholder="search..."
          value={search}
          onChangeText={(name, text) => {
            setSearch(text);
            if (props.getSearchText) {
              props.getSearchText(text);
            }
          }}
        />
      )}
    </View>
  );
};

export default EshopHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    minHeight: 50,
    padding: 15,
    backgroundColor: colors.app.DEFAULT_GREEN,
  },
  imageStyle: {
    height: 45,
  },
  logoContainer: {
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBack: {
    position: 'absolute',
    left: 5,
  },
  locaz: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerContainer: {
    width: '100%',

    // alignContent: 'center',
    // alignSelf: 'center',
    marginBottom: 5,
  },
  locationContainer: {
    display: 'flex',
    backgroundColor: 'red',
    // width: '100%',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,

    marginHorizontal: 20,
  },
  locationText: {
    color: colors.app.DEFAULT_WHITE,
    marginLeft: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    // fontFamily: Fonts.POPPINS_MEDIUM,
  },
  selectedLocationText: {
    color: colors.app.DEFAULT_YELLOW,
    marginLeft: 5,
    fontSize: 14,
    lineHeight: 14 * 1.4,
    // fontFamily: Fonts.POPPINS_MEDIUM,
  },
  alertBadge: {
    borderRadius: 32,
    backgroundColor: colors.app.DEFAULT_YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
    height: 16,
    width: 16,
    position: 'absolute',
    right: -2,
    top: -10,
  },
  alertBadgeText: {
    color: colors.app.DEFAULT_WHITE,
    fontSize: 10,
    lineHeight: 10 * 1.4,
    // fontFamily: Fonts.POPPINS_BOLD,
  },
});
