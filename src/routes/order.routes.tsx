import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../config/colors';

import OrderCreate from '../pages/Order/Create';
import { useNavigation } from '@react-navigation/core';
import { OrderProvider } from '../contexts/order';

const Order = createStackNavigator();

const OrderRoutes = () => {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <OrderProvider>
      <Order.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.background
          }
        }}
      >
        <Order.Screen 
          name="OrderCreate"
          component={OrderCreate}
          options={{
            title: 'Carrinho',
            headerStyle: {
              backgroundColor: colors.button,
            },
            headerTitleStyle:{
              color: colors.font
            },
            headerTitleAlign: 'center',
          }}
        />
      </Order.Navigator>
    </OrderProvider>
  );
}

export default OrderRoutes;