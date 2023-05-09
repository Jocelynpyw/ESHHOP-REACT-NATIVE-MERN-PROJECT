import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../utils/colors';
import SimpleHeader from '../../../components/SimpleHeader';
import Display from '../../../utils/Display';
import Feather from 'react-native-vector-icons/Feather';

const ShippingScreen = () => {
  const [phone, setPhone] = useState<String>('');
  const [city, setCity] = useState<String>('');
  const [shippingAdress1, setShippingAdress1] = useState<String>('');
  const [shippingAdress2, setShippingAdress2] = useState<String>('');
  const [zipCode, setZipCode] = useState<String>('');
  return (
    <View style={styles.container}>
      <SimpleHeader back title="Add A Shipping Adress" />
      {/*  Input Container Start */}
      <ScrollView>
        <View style={styles.containerContent}>
          <Text>Phone</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                placeholder="Phone..."
                placeholderTextColor={colors.app.DEFAULT_GREY}
                selectionColor={colors.app.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={text => setPhone(text)}
              />
            </View>
          </View>
        </View>
        {/*  Input Container END */}
        <View style={styles.containerContent}>
          <Text>Shipping adresse 1</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                placeholder="Shipping adresse 1"
                placeholderTextColor={colors.app.DEFAULT_GREY}
                selectionColor={colors.app.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={text => setShippingAdress1(text)}
              />
            </View>
          </View>
        </View>
        {/*  Input Container END */}
        <View style={styles.containerContent}>
          <Text>Shipping adresse 2</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                placeholder="Shipping adresse 2"
                placeholderTextColor={colors.app.DEFAULT_GREY}
                selectionColor={colors.app.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={text => setShippingAdress2(text)}
              />
            </View>
          </View>
        </View>
        {/*  Input Container END */}
        <View style={styles.containerContent}>
          <Text>City</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                placeholder="City"
                placeholderTextColor={colors.app.DEFAULT_GREY}
                selectionColor={colors.app.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={text => setCity(text)}
              />
            </View>
          </View>
        </View>
        {/*  Input Container END */}
        <View style={styles.containerContent}>
          <Text>Zip Code</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                placeholder="Zip Code"
                placeholderTextColor={colors.app.DEFAULT_GREY}
                selectionColor={colors.app.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={text => setZipCode(text)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      {/*  Input Container END */}
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() =>
          console.log(
            `Le telephone est : ${phone} \n l'adresse 1 est : ${shippingAdress1}\n l'addresse 2 est : ${shippingAdress2} \n la ville est : ${city} \n Le zip code pour la fin est : ${zipCode}`,
          )
        }>
        <Text style={styles.checkoutText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShippingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.app.white,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },

  content: {
    fontSize: 20,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: colors.app.LIGHT_GREY,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colors.app.LIGHT_GREY2,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 12,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: colors.app.DEFAULT_BLACK,
    flex: 1,
  },
  containerContent: {
    padding: 10,
    marginHorizontal: 20,
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
});
