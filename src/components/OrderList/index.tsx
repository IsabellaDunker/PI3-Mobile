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
  const { products, id } = order;

  const price = products.reduce((prev, curr)=>(prev + curr.products_ordereds.price), 0)

  return { price, id };
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
                <ListItem.Title style={styles.itemFont}>Data a ser adicionada</ListItem.Title>
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