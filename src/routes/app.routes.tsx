import * as React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Button, Icon } from 'react-native-elements';

import Home from '../pages/Home';
import { colors } from '../config/colors';

const App = createStackNavigator();

const AppRoutes = () => {
  return (
    <App.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.background
        }
      }}
    >
      <App.Screen 
        name="Auth"
        component={Home}
        options={{
          title: 'Serviços',
          headerStyle: {
            backgroundColor: colors.button,
          },
          headerTitleStyle:{
            color: colors.font
          },
          headerTitleAlign: 'center',
        }}
      />
    </App.Navigator>
  );
}

export default AppRoutes;