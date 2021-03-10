import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import { colors } from '../config/colors';
import UserRoutes from './user.routes';
import { UserProvider } from '../contexts/user';

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
        name="Home"
        component={Home}
        options={{
          title: 'Menu',
          headerStyle: {
            backgroundColor: colors.button,
          },
          headerTitleStyle:{
            color: colors.font
          },
          headerTitleAlign: 'center',
        }}
      />
      <UserProvider>
        <App.Screen 
          name="User"
          component={UserRoutes}
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
      </UserProvider>
    </App.Navigator>
  );
}

export default AppRoutes;