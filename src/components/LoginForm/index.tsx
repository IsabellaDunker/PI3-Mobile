import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';

import { Input, Button } from 'react-native-elements';

import styles from './styles';

interface IPropsLoginForm {
  onSubmit: (cpf: string, password: string) => void;
}

const LoginForm: React.FC<IPropsLoginForm> = (props) => {
  const { onSubmit } = props;

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.container}>
      <Input
        label=''
        placeholder='Digite seu CPF'
        placeholderTextColor='#cccccc'
        autoCapitalize='none'
        autoCompleteType='email'
        keyboardType='number-pad'
        keyboardAppearance='default'
        returnKeyType='next'
        returnKeyLabel='next'
        leftIcon={{ type: 'font-awesome', name: 'user', size: 20, color: '#bfbaef'}}
        style={styles.textInput}
        containerStyle={styles.textInputContainer}
        inputStyle={styles.textInputText}
        value={cpf}
        onChangeText={setCpf}
        />
      <Input
        label=''
        placeholder='Digite sua senha'
        placeholderTextColor='#cccccc'
        leftIcon={{ type: 'font-awesome', name: 'lock', size: 24, color: '#bfbaef'}}
        style={styles.textInput}
        containerStyle={styles.textInputContainer}
        inputStyle={styles.textInputText}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button 
        title="Entrar"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={() => {onSubmit(cpf, password)}}
      />
    </View>
  );
}

export default LoginForm;