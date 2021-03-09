import React from 'react';
import { View, Text } from 'react-native';

import LoginForm from '../../components/LoginForm';

import styles from './styles';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <LoginForm onSubmit={( cpf, password ) => {}} />
    </View>
  );
}

export default Login;