import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import HeaderButton from '../../../components/Header/Button';

import styles from './styles';

const OrderDetails: React.FC = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton onPress={() => {navigation.goBack()}} iconName="chevron-left"/>
      )
    });
  }, [navigation]);

  return (
    <View />
  );
}

export default OrderDetails;