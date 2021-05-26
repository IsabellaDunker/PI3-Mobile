import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { colors } from '../../config/colors';
import { IOrderData } from '../../interfaces/order';
import { ITabData } from '../../interfaces/tab';
import styles from './styles';

interface IProps {
  orders: IOrderData[];
}

function getOrderData(order: IOrderData){
  const { products, id, createdAt } = order;

  const price = products.reduce((prev, curr)=>(prev + curr.products_ordereds.price), 0)

  const day = order.createdAt.slice(8, 10);
  const month = order.createdAt.slice(5, 7);
  const year = order.createdAt.slice(0, 4);
  const date = `${day}/${month}/${year}`;
  const hour = order.createdAt.slice(11, 13);
  const minute = order.createdAt.slice(14, 16);
  const time = `${hour}:${minute}`;

  return { price, id, datetime: `${date} - ${time}` };
}

const OrderList: React.FC<IProps> = (props) => {
  const { orders } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {
        orders.map((order, index) => {
          const orderData = getOrderData(order);

          return (
            <ListItem 
              key={index}
              bottomDivider
              containerStyle={styles.itemContainer}
              onPress={() => {
                navigation.navigate('OrderDetails', {order_id: orderData.id})
              }}
            > 
              <View>
                <Icon
                  name='article'
                  color={'white'}
                />
              </View>
              <ListItem.Content>
                <ListItem.Title style={styles.itemFont}>{orderData.datetime}</ListItem.Title>
                <ListItem.Subtitle style={styles.itemFont}>R${orderData.price}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron color={colors.font} />
            </ListItem>
          )
        })
      }
      
    </View>
  );
}

export default OrderList;