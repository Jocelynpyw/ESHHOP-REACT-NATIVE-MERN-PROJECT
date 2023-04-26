import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import {Separator, ToggleButton} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Separator from '../../../components/Separator';
import Display from '../../../utils/Display';
import {colors} from '../../../utils/colors';
import {AVATAR} from '../../../utils/images';
import ToggleButton from '../../../components/ToggleButton';

const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.app.DEFAULT_GREEN}
          translucent
        />
        <Separator height={StatusBar.currentHeight} />
        <View style={styles.backgroundCurvedContainer} />
        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={20}
            color={colors.app.DEFAULT_WHITE}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>Account</Text>
          <View>
            <Feather name="bell" size={20} color={colors.app.DEFAULT_WHITE} />
            <View style={styles.alertBadge}>
              <Text style={styles.alertBadgeText}>12</Text>
            </View>
          </View>
        </View>
        <View style={styles.profileHeaderContainer}>
          <View style={styles.profileImageContainer}>
            <Image style={styles.profileImage} source={AVATAR} />
          </View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.nameText}>Jocelyn Pyw</Text>
            <Text style={styles.emailText}>jocelynpyw2@gmail.com</Text>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
            <View style={styles.menuIcon}>
              <MaterialCommunityIcons
                name="truck-fast-outline"
                size={18}
                color={colors.app.DEFAULT_GREEN}
              />
            </View>
            <Text style={styles.menuText}>My All {'\n'}Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
            <View
              style={{
                ...styles.menuIcon,
                backgroundColor: colors.app.LIGHT_RED,
              }}>
              <MaterialCommunityIcons
                name="gift-outline"
                size={18}
                color={colors.app.SECONDARY_RED}
              />
            </View>
            <Text style={styles.menuText}>Offers {'&\n'} Promos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
            <View
              style={{
                ...styles.menuIcon,
                backgroundColor: colors.app.LIGHT_YELLOW,
              }}>
              <Ionicons
                name="location-outline"
                size={18}
                color={colors.app.DEFAULT_YELLOW}
              />
            </View>
            <Text style={styles.menuText}>Delivery Addresses</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mainContainer}>
          <Text style={styles.sectionHeaderText}>My Account</Text>
          <TouchableOpacity style={styles.sectionContainer} activeOpacity={0.8}>
            <View style={styles.sectionTextContainer}>
              <Ionicons
                name="person-outline"
                size={18}
                color={colors.app.DEFAULT_GREEN}
              />
              <Text style={styles.sectionText}>Manage Profile</Text>
            </View>
            <Feather
              name="chevron-right"
              color={colors.app.INACTIVE_GREY}
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionContainer} activeOpacity={0.8}>
            <View style={styles.sectionTextContainer}>
              <Ionicons
                name="card-outline"
                size={18}
                color={colors.app.DEFAULT_GREEN}
              />
              <Text style={styles.sectionText}>Payment</Text>
            </View>
            <Feather
              name="chevron-right"
              color={colors.app.INACTIVE_GREY}
              size={20}
            />
          </TouchableOpacity>

          <Text style={styles.sectionHeaderText}>Notification</Text>
          <View style={styles.sectionContainer} activeOpacity={0.8}>
            <View style={styles.sectionTextContainer}>
              <Feather name="bell" size={18} color={colors.app.DEFAULT_GREEN} />
              <Text style={styles.sectionText}>Notification</Text>
            </View>
            <ToggleButton size={0.5} />
          </View>
          <View style={styles.sectionContainer} activeOpacity={0.8}>
            <View style={styles.sectionTextContainer}>
              <Feather name="bell" size={18} color={colors.app.DEFAULT_GREEN} />
              <Text style={styles.sectionText}>
                Promos & Offers Notification
              </Text>
            </View>
            <ToggleButton size={0.5} />
          </View>

          <Text style={styles.sectionHeaderText}>More</Text>
          <View style={styles.sectionContainer} activeOpacity={0.8}>
            <View style={styles.sectionTextContainer}>
              <Ionicons
                name="ios-color-palette-outline"
                size={18}
                color={colors.app.DEFAULT_GREEN}
              />
              <Text style={styles.sectionText}>Dark Mode</Text>
            </View>
            <ToggleButton size={0.5} />
          </View>
          <View style={styles.sectionContainer}>
            <TouchableOpacity
              style={styles.sectionTextContainer}
              activeOpacity={0.8}>
              <MaterialCommunityIcons
                name="logout"
                size={18}
                color={colors.app.DEFAULT_GREEN}
              />
              <Text style={styles.sectionText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.app.SECONDARY_WHITE,
  },
  backgroundCurvedContainer: {
    backgroundColor: colors.app.DEFAULT_GREEN,
    height: 2000,
    position: 'absolute',
    top: -1 * (2000 - 230),
    width: 2000,
    borderRadius: 2000,
    alignSelf: 'center',
    zIndex: -1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    color: colors.app.DEFAULT_WHITE,
  },
  alertBadge: {
    backgroundColor: colors.app.DEFAULT_YELLOW,
    position: 'absolute',
    height: 16,
    width: 16,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    right: -2,
    top: -10,
  },
  alertBadgeText: {
    fontSize: 10,
    // fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: 10 * 1.4,
    color: colors.app.DEFAULT_WHITE,
  },
  profileHeaderContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profileImageContainer: {
    backgroundColor: colors.app.DEFAULT_WHITE,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    elevation: 3,
  },
  profileImage: {
    width: Display.setWidth(15),
    height: Display.setWidth(15),
    borderRadius: 32,
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  nameText: {
    fontSize: 14,
    // fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 14 * 1.4,
    color: colors.app.DEFAULT_WHITE,
  },
  emailText: {
    fontSize: 10,
    // fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 10 * 1.4,
    color: colors.app.DEFAULT_WHITE,
  },
  menuContainer: {
    backgroundColor: colors.app.DEFAULT_WHITE,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
  },
  menuIcon: {
    backgroundColor: colors.app.LIGHT_GREEN,
    height: Display.setWidth(8),
    width: Display.setWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
  },
  menuText: {
    fontSize: 12,
    // fontFamily: Fonts.POPPINS_SEMI_BOLD,
    lineHeight: 12 * 1.4,
    color: colors.app.DEFAULT_BLACK,
    textAlign: 'center',
    marginTop: 5,
  },
  mainContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    // marginBottom: 20,
    backgroundColor: colors.app.DEFAULT_WHITE,
    elevation: 3,
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingBottom: 20,
  },
  sectionHeaderText: {
    fontSize: 14,
    // fontFamily: Fonts.POPPINS_SEMI_BOLD,
    lineHeight: 14 * 1.4,
    color: colors.app.DEFAULT_BLACK,
    marginTop: 25,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  sectionTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 13,
    // fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 13 * 1.4,
    color: colors.app.INACTIVE_GREY,
    marginLeft: 10,
  },
});

export default ProfileScreen;
