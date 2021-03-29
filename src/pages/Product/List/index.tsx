import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect } from 'react';
import { View } from 'react-native';
import HeaderButton from '../../../components/Header/Button';
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

  return <View />;
}

export default ProductList;