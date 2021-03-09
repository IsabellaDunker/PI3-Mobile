import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#f0f0f5'
        }
      }}
    >
      <AuthStack.Screen name="Auth" component={Login} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;