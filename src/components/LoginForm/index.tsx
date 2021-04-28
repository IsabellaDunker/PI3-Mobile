import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Input, Button } from 'react-native-elements';

import styles from './styles';
import { Cache } from '../../services/cache';
import { cpfMask } from '../../utils/masks';

interface IProps {
  onSubmit: (cpf: string, password: string) => void;
}

const LoginForm: React.FC<IProps> = (props) => {
  const { onSubmit } = props;

  useEffect(() => {
    async function getCache(){
      const cpf = await Cache.getCpf();
      if(cpf){
        setCpf(cpf);
      }
    }
    getCache();
  }, []);

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
        value={cpfMask(cpf)}
        onChangeText={(new_cpf) => {
          if(new_cpf.length <= 14){
            setCpf(new_cpf);
          }
        }}
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