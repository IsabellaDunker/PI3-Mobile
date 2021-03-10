import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../config/colors';

import UserList from '../pages/User/List';
import UserCreate from '../pages/User/Create';

const User = createStackNavigator();

const UserRoutes = () => {
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