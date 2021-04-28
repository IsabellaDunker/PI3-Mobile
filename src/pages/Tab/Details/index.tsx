import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import HeaderButton from '../../../components/Header/Button';
import OrderList from '../../../components/OrderList';
import { ITabData } from '../../../interfaces/tab';

import styles from './styles';

interface IParams {
  tab: ITabData;
}

const TabDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { tab } = route.params as IParams;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton onPress={() => {navigation.goBack()}} iconName="chevron-left"/>
      ),
      headerRight: () => (
        <HeaderButton onPress={() => {}} iconName="add"/>
      ),
      title: 'Pedidos'
    });
  }, [navigation]);
  
  return (
    <View style={styles.container}>
      {
        (tab.orders.length > 0) ? 
        <OrderList orders={tab.orders}/> :
        (
          <Text style={styles.noOrdersFont}>
            Sem pedidos feitos!
          </Text>
        )
      }
      
    </View>
  );
}

export default TabDetails;