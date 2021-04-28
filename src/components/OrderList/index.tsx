import React from 'react';
import { View, Text } from 'react-native';
import { IOrderData } from '../../interfaces/order';
import { ITabData } from '../../interfaces/tab';
import styles from './styles';

interface IProps {
  orders: IOrderData[];
}

const OrderList: React.FC<IProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>
        Temos pedidos aqui!
      </Text>
    </View>
  );
}

export default OrderList;