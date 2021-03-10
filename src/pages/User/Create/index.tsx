import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {Button, ButtonGroup, Input} from 'react-native-elements';

import { IUserData } from '../../../interfaces/user';
import { brDateMask, usToBrDate } from '../../../utils/masks';

import styles from './styles';

interface Params {
  user: IUserData | null;
}

const UserCreate: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { user } = route.params as Params;

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');

  const [action, setAction] = useState('Criar');
  const [userTypeSelectedIndex, setUserTypeSelectedIndex] = useState(0);
  const userTypes = ['Customer', 'Waiter', 'Admin'];

  useEffect(() => {
    if(user){
      setName(user.name);
      setCpf(user.cpf);
      setCellphone(user.cellphone);
      setDate(usToBrDate(user.birth_date));
      setAction('Salvar');
      setUserTypeSelectedIndex(userTypes.indexOf(user.type));
    }
  }, []);

  return (
    <View style={styles.container}>
      <Input
        label='Nome'
        value={name}
        onChangeText={setName}
        style={styles.textInput}
        inputStyle={styles.textInputText}
        labelStyle={styles.labelStyle}
      />
      <Input
        label='CPF'
        value={cpf}
        onChangeText={setCpf}
        style={styles.textInput}

        inputStyle={styles.textInputText}
        labelStyle={styles.labelStyle}
      />
      <Input
        label='Celular'
        value={cellphone}
        onChangeText={setCellphone}
        style={styles.textInput}
        inputStyle={styles.textInputText}
        labelStyle={styles.labelStyle}
      />
      <Input
        label='Data de nascimento'
        value={brDateMask(date)}
        onChangeText={(newDate) => {
          if(newDate.length <= 8)
            setDate(newDate);
          }
        }
        style={styles.textInput}
        inputStyle={styles.textInputText}
        labelStyle={styles.labelStyle}
      />
      {
        !user ? (
          <Input
            disabled={userTypeSelectedIndex == 0}
            label='Senha'
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
            inputStyle={styles.textInputText}
            labelStyle={styles.labelStyle}
          />
        ) : (
          null
        )
      }
      
      <Text style={{...styles.labelStyle, marginLeft: '2.5%'}}>Tipo</Text>
      <ButtonGroup 
        onPress={setUserTypeSelectedIndex}
        selectedIndex={userTypeSelectedIndex}
        buttons={userTypes}
        containerStyle={styles.buttonGroup}
        selectedButtonStyle={styles.button}
        textStyle={styles.buttonTitle}
      />

      <Button 
        title={action}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={() => {}}
      />
    </View>
  );
}

export default UserCreate;