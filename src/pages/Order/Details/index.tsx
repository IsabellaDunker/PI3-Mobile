import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import HeaderButton from '../../../components/Header/Button';
import ProductItem from '../../../components/ProductItem';
import { colors } from '../../../config/colors';
import { IOrderData } from '../../../interfaces/order';
import * as orderService from '../../../services/order';

import styles from './styles';

interface IParams {
  order_id: number;
}

const OrderDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { order_id } = route.params as IParams;

  const [order, setOrder] = useState<IOrderData|null>(null);

  const getOrder = async () => {
    const response = await orderService.get_one(order_id);
    setOrder(response);
  }

  useEffect(() => {
    getOrder();
  }, []);

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
        order?.products.map((product, index) => {
          return (
            <ListItem 
              key={index}
              bottomDivider
              containerStyle={styles.itemContainer}
            > 
              <View>
                <Icon
                  name='fastfood'
                  color={'white'}
                />
              </View>
              <ListItem.Content>
                <ListItem.Title style={styles.itemFont}>{product.name}</ListItem.Title>
                <ListItem.Subtitle style={styles.itemFont}>{product.products_ordereds.units} x R${product.price}</ListItem.Subtitle>
              </ListItem.Content>
              <View>
                <Text style={styles.itemFont}>R${product.products_ordereds.price}</Text>
              </View>
            </ListItem>
          );
        })
      }
    </View>
  );
}

export default OrderDetails;