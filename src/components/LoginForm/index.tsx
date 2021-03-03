import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';

import { Input, Button } from 'react-native-elements';

import styles from './styles';

const LoginForm: React.FC = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Digite seus dados de login</Text>
      <Input
        label=''
        placeholder='Digite seu CPF'
        autoCapitalize='none'
        autoCompleteType='email'
        keyboardType='number-pad'
        keyboardAppearance='default'
        returnKeyType='next'
        returnKeyLabel='next'
        leftIcon={{ type: 'font-awesome', name: 'user', size: 20}}
        style={styles.textInput}
        containerStyle={styles.textInputContainer}
        value={cpf}
        onChangeText={setCpf}
      />
      <Input
        label=''
        placeholder='Digite sua senha'
        leftIcon={{ type: 'font-awesome', name: 'lock', size: 24}}
        style={styles.textInput}
        containerStyle={styles.textInputContainer}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button 
        title="Entrar"
        containerStyle={styles.button}
      />
    </View>
  );
}

export default LoginForm;