import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const AuthStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AuthStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#f0f0f5'
        }
      }}
    >
      <AuthStack.Screen name="Auth" component={Home} />
    </AuthStack.Navigator>
  );
}

export default AppRoutes;