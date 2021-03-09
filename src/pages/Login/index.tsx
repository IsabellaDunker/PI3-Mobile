import React from 'react';
import { View, Text } from 'react-native';

import { useAuth } from '../../contexts/auth';
import LoginForm from '../../components/LoginForm';

import styles from './styles';

const Login: React.FC = () => {
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <LoginForm onSubmit={login} />
    </View>
  );
}

export default Login;