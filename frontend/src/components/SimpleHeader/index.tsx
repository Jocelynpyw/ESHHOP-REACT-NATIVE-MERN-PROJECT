import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FunctionComponent} from 'react';
import {colors} from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Separator from '../Separator';

interface Props {
  back?: boolean;
  title?: String;
}

const SimpleHeader: FunctionComponent<Props> = (props: Props) => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.app.DEFAULT_WHITE}
      />
      {/* <Separator height={StatusBar.currentHeight} /> */}

      <View style={styles.headerContainer}>
        {props.back && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={30} />
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
    </View>
  );
};

export default SimpleHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 20,
    // fontFamily:'p'
    lineHeight: 20 * 1.4,
    width: '80%',
    textAlign: 'center',
    color: colors.app.DEFAULT_BLACK,
  },
});
