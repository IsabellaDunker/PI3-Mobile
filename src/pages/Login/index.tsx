import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import AuthContext from '../../contexts/auth';
import LoginForm from '../../components/LoginForm';

import styles from './styles';

const Login: React.FC = () => {
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <LoginForm onSubmit={login} />
    </View>
  );
}

export default Login;