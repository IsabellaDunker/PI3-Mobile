import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import HeaderButton from '../../../components/Header/Button';

import styles from './styles';

const Create: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton onPress={() => {navigation.goBack()}} iconName="chevron-left"/>
      ),
      headerRight: () => (
        <HeaderButton onPress={() => {navigation.navigate('Order')}} iconName="add"/>
      ),
      title: 'Carrinho'
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Pedido</Text>
    </View>
  );
}

export default Create;