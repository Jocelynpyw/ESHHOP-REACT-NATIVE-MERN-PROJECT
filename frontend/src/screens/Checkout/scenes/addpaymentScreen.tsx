import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../utils/colors';
import SimpleHeader from '../../../components/SimpleHeader';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Feather';
import Display from '../../../utils/Display';
import {useNavigation} from '@react-navigation/native';
import {MASTERCARD_LOGO, OM_LOGO, PAYPAL_LOGO} from '../../../utils/images';

const AddpaymentScreen = () => {
  const navigation = useNavigation();
  const [selectPayment, setSelectPayment] = useState<String>('');
  return (
    <View style={styles.container}>
      <SimpleHeader back title="Add A Payment Method" />
      <View style={styles.containertexte}>
        <Text
          style={{
            marginBottom: 10,
            color: colors.app.DEFAULT_GREY,
            fontWeight: '400',
          }}>
          Choose payment method to add
        </Text>
        {/* Start item */}
        <Pressable
          style={styles.Item}
          onPress={() => {
            setSelectPayment('Paypal');
          }}>
          <View style={styles.modeItemContainer}>
            <View style={styles.modeItemLogo}>
              <Image source={PAYPAL_LOGO} style={styles.logoContainer} />
            </View>
            <View style={styles.modeItemTextContainer}>
              <Text style={styles.modeItemTitle}>Paypal</Text>
              <Text style={styles.modeItemDescription}>
                Faster & safer way to send money
              </Text>
            </View>
          </View>
          {selectPayment === 'Paypal' && (
            <View style={styles.selectedBox}>
              <Feather name="check" color={colors.app.white} size={15} />
            </View>
          )}
        </Pressable>
        {/* END item */}
        <Pressable
          style={styles.Item}
          onPress={() => {
            setSelectPayment('MasterCard');
          }}>
          <View style={styles.modeItemContainer}>
            <View style={styles.modeItemLogo}>
              <Image source={MASTERCARD_LOGO} style={styles.logoContainer} />
            </View>
            <View style={styles.modeItemTextContainer}>
              <Text style={styles.modeItemTitle}>Credit card</Text>
              <Text style={styles.modeItemDescription}>
                Pay with masterCard Visa or Visa
              </Text>
            </View>
          </View>
          {selectPayment === 'MasterCard' && (
            <View style={styles.selectedBox}>
              <Feather name="check" color={colors.app.white} size={15} />
            </View>
          )}
        </Pressable>
        {/* END item */}
        <Pressable
          style={styles.Item}
          style={styles.Item}
          onPress={() => {
            setSelectPayment('OM');
          }}>
          <View style={styles.modeItemContainer}>
            <View style={styles.modeItemLogo}>
              <Image
                source={OM_LOGO}
                style={styles.logoContainer}
                resizeMode="contain"
              />
            </View>
            <View style={styles.modeItemTextContainer}>
              <Text style={styles.modeItemTitle}>Orange MOney</Text>
              <Text style={styles.modeItemDescription}>
                Faster & safer way to send money
              </Text>
            </View>
          </View>
          {selectPayment === 'OM' && (
            <View style={styles.selectedBox}>
              <Feather name="check" color={colors.app.white} size={15} />
            </View>
          )}
        </Pressable>
        {/* END item */}
      </View>
      <TouchableOpacity
        disabled={selectPayment === '' ? true : false}
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('shippingAdress')}>
        <Text style={styles.checkoutText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddpaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.app.white,
  },
  containertexte: {
    padding: 20,
  },
  Item: {
    marginVertical: 10,
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 25,
    backgroundColor: '#F5F7FA',
    padding: 10,
  },
  modeItemContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  modeItemLogo: {
    padding: 5,
  },
  modeItemTextContainer: {marginLeft: 10},
  modeItemTitle: {
    color: colors.text.black,
    fontWeight: '400',
  },
  modeItemDescription: {
    fontSize: 10,
  },
  selectedBox: {
    height: 25,
    width: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: '#F88C07',
    // backgroundColor: colors.app.DEFAULT_YELLOW,
  },
  checkoutButton: {
    flexDirection: 'row',
    width: Display.setWidth(92),
    backgroundColor: colors.app.DEFAULT_GREEN,
    alignSelf: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: Display.setHeight(7),
    marginTop: 10,
    position: 'absolute',
    bottom: 10,
  },
  checkoutText: {
    fontSize: 16,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 16 * 1.4,
    color: colors.app.DEFAULT_WHITE,
    marginLeft: 8,
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    height: 22,
    width: 22,
  },
});
