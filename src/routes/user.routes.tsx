import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../config/colors';

import UserList from '../pages/User/List';
import UserCreate from '../pages/User/Create';
import { useNavigation } from '@react-navigation/core';
import { Button, Icon } from 'react-native-elements';

const User = createStackNavigator();

import styles from './styles'; // remove

const UserRoutes = () => {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          icon={
            <Icon
              name="chevron-left"
              size={24}
              color={colors.font}
            />
          }
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          onPress={() => {navigation.goBack()}}
        />
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