import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../config/colors';

import BackButton from '../components/Header/BackButton';
import UserList from '../pages/User/List';
import UserCreate from '../pages/User/Create';
import { useNavigation } from '@react-navigation/core';

const User = createStackNavigator();

const UserRoutes = () => {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <BackButton onPress={() => {navigation.goBack()}} />
      ),
    });
  }, [navigation]);


  return (
    <User.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.background
        }
      }}
    >
      <User.Screen 
        name="UserList"
        component={UserList}
      />
      <User.Screen 
        name="UserCreate"
        component={UserCreate}
      />
    </User.Navigator>
  );
}

export default UserRoutes;