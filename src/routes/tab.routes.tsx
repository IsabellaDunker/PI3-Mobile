import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../config/colors';

import TabList from '../pages/Tab/List';
import TabDetails from '../pages/Tab/Details';
import OrderDetails from '../pages/Order/Details';
import { useNavigation } from '@react-navigation/core';
import { TabProvider } from '../contexts/tab';

const Tab = createStackNavigator();

const TabRoutes = () => {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <TabProvider>
      <Tab.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.background
          }
        }}
      >
        <Tab.Screen 
          name="TabList"
          component={TabList}
          options={{
            title: 'Comandas',
            headerStyle: {
              backgroundColor: colors.button,
            },
            headerTitleStyle:{
              color: colors.font
            },
            headerTitleAlign: 'center',
          }}
        />
        <Tab.Screen 
          name="TabDetails"
          component={TabDetails}
          options={{
            title: 'Comandas',
            headerStyle: {
              backgroundColor: colors.button,
            },
            headerTitleStyle:{
              color: colors.font
            },
            headerTitleAlign: 'center',
          }}
        />
        <Tab.Screen 
          name="OrderDetails"
          component={OrderDetails}
          options={{
            title: 'Pedido',
            headerStyle: {
              backgroundColor: colors.button,
            },
            headerTitleStyle:{
              color: colors.font
            },
            headerTitleAlign: 'center',
          }}
        />
      </Tab.Navigator>      
    </TabProvider>
  );
}

export default TabRoutes;