import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, Linking } from 'react-native';
import HeaderButton from '../../../components/Header/Button';
import OrderList from '../../../components/OrderList';
import { IOrderData } from '../../../interfaces/order';
import { ITabData } from '../../../interfaces/tab';

import styles from './styles';

interface IParams {
  tab: ITabData;
  toPay: boolean;
}

function getOrderDate(order: IOrderData){
  const { createdAt } = order;

  const day = order.createdAt.slice(8, 10);
  const month = order.createdAt.slice(5, 7);
  const year = order.createdAt.slice(0, 4);
  const date = `${day}/${month}/${year}`;
  const hour = order.createdAt.slice(11, 13);
  const minute = order.createdAt.slice(14, 16);
  const time = `${hour}:${minute}`;

  return `${date} - ${time}`;
}

const TabDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { tab, toPay } = route.params as IParams;

  let text = '';

  let total = 0;


  tab.orders.forEach((order) => {
    text += `${getOrderDate(order)}\n`;
    text += `${'========================\n'}`
    order.products.forEach((product) => {
      const unitPrice = product.products_ordereds.price / product.products_ordereds.units;
      text += `${product.name}\n`;
      text += `${product.products_ordereds.units} x R$${unitPrice}\n`;
      text += `${'========================\n'}`;
      total += (product.products_ordereds.price);
    });
    text += `\n`;
  });
  text += `Total: R$${total}`

  useLayoutEffect(() => {
    navigation.setOptions({ 
      headerLeft: () => (
        <HeaderButton onPress={() => {navigation.goBack()}} iconName="chevron-left"/>
      ),
      headerRight: toPay ? 
        () => (
          <HeaderButton 
            onPress={() => {
              Linking.openURL(encodeURI(`whatsapp://send?text=${text}&phone=+5521994677053`)) 
            }} 
            iconName="share"/>
        ) :
        () => (
          <HeaderButton onPress={() => {navigation.navigate('Order')}} iconName="shopping-cart"/>
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