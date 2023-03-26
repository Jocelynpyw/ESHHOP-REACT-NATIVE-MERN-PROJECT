import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FunctionComponent} from 'react';
import {colors} from '../../../utils/colors';

interface IProductsFilter {
  categoryFilter?(id: string): void;
  productCtg?: any;
  active?: any;
  setActive?: any;
  categories?: any;
}

const CategoryFilter: FunctionComponent<IProductsFilter> = (
  props: IProductsFilter,
) => {
  return (
    <ScrollView
      horizontal={true}
      bounces={true}
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}>
      {props.categories.map(item => (
        <TouchableOpacity
          key={item._id}
          onPress={() => {
            props.categoryFilter(item._id),
              console.log(props.categories.indexOf(item)),
              props.setActive(props.categories.indexOf(item));
          }}>
          <View
            style={[
              styles.scrollElements,
              props.active == props.categories.indexOf(item)
                ? styles.active
                : styles.inactive,
            ]}>
            <Text style={styles.scrollText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryFilter;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginVertical: 5,
  },
  scrollElements: {
    minWidth: 100,
    height: 40,
    padding: 5,
    backgroundColor: '#0a879180',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 5,
  },
  scrollText: {
    color: 'white',
  },
  active: {
    backgroundColor: colors.app.DEFAULT_GREEN,
  },
  inactive: {
    // backgroundColor: 'red',
  },
});
