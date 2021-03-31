import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import HeaderButton from '../../../components/Header/Button';
import { colors } from '../../../config/colors';
import { useProduct } from '../../../contexts/product';

import styles from './styles';

const ProductList: React.FC = () => {
  const navigation = useNavigation();

  const { products } = useProduct();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton onPress={() => {navigation.goBack()}} iconName="chevron-left"/>
      )
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {
        products.map((product, index) => (
          <ListItem 
            key={index}
            bottomDivider
            containerStyle={styles.itemContainer}
            onPress={() => {
              navigation.navigate('ProductDetails', { product })
            }}
          >
            <ListItem.Content>
              <ListItem.Title style={styles.itemFont}>{product.name}</ListItem.Title>
              <ListItem.Subtitle style={styles.itemFont}>{product.price}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color={colors.font} />
          </ListItem>
        ))
      }
    </View>
  );
}

export default ProductList;