import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../config/colors';

import ProductList from '../pages/Product/List';
import { useNavigation } from '@react-navigation/core';
import { ProductProvider } from '../contexts/product';

const Product = createStackNavigator();

const ProductRoutes = () => {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ProductProvider>
      <Product.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.background
          }
        }}
      >
        <Product.Screen
          name="ProductList"
          component={ProductList}
          options={{
            title: 'Cardápio',
            headerStyle: {
              backgroundColor: colors.button,
            },
            headerTitleStyle:{
              color: colors.font
            },
            headerTitleAlign: 'center',
          }}
        />
      </Product.Navigator>      
    </ProductProvider>
  );
}

export default ProductRoutes;