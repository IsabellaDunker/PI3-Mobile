import React from 'react';
import { View, Text } from 'react-native';

import LoginForm from '../../components/LoginForm';

import styles from './styles';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
}

export default LoginScreen;