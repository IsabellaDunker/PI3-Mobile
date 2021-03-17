import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../config/colors';

import UserList from '../pages/User/List';
import UserCreate from '../pages/User/Create';
import { useNavigation } from '@react-navigation/core';
import { UserProvider } from '../contexts/user';

const User = createStackNavigator();

const UserRoutes = () => {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <UserProvider>
      <User.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.background
          }
        }}
      >
        <User.Screen 
          name="UserList"
          component={UserList}
          options={{
            title: 'Usuários',
            headerStyle: {
              backgroundColor: colors.button,
            },
            headerTitleStyle:{
              color: colors.font
            },
            headerTitleAlign: 'center',
          }}
        />
        <User.Screen 
          name="UserCreate"
          component={UserCreate}
          options={{
            title: 'Usuários',
            headerStyle: {
              backgroundColor: colors.button,
            },
            headerTitleStyle:{
              color: colors.font
            },
            headerTitleAlign: 'center',
          }}
        />
      </User.Navigator>      
    </UserProvider>
  );
}

export default UserRoutes;