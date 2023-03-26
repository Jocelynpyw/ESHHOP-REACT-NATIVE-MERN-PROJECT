import {
  Pressable,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import React, {FunctionComponent} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../utils/colors';

interface Iinput {
  value?: string;
  styless?: ViewStyle;
  stylesInput?: ViewStyle;
  icon?: boolean;
  iconName?: string;
  placeholder?: string;
  onChangeText?(name: string, text: string): void;
  text?: string;
  name?: string;
}

const EsInput: FunctionComponent<Iinput> = (props: Iinput) => {
  const {onChangeText = () => {}, name = ''} = props;
  return (
    <View style={[styles.container, props.styless]}>
      <View style={[styles.defaultInputContainer, props.stylesInput]}>
        {props.icon && (
          <Pressable>
            <Ionicons
              name={props.iconName}
              color="grey"
              size={20}
              style={styles.iconStyle}
            />
          </Pressable>
        )}

        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          onChangeText={text => onChangeText(name, text)}
          // onChangeText={text => onChangeText(text)}
        />
        <TouchableOpacity>
          <Feather
            name="sliders"
            color={colors.app.DEFAULT_YELLOW}
            size={20}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EsInput;

const styles = StyleSheet.create({
  iconStyle: {
    paddingHorizontal: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 5,
  },
  input: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  defaultInputContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    width: '100%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 18,
  },
});
