import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import AuthContext from './src/contexts/auth';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <AuthContext.Provider>
          <Routes />
        </AuthContext.Provider>
      </NavigationContainer>
    </>
  );
}