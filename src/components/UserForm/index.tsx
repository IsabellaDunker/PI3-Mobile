import React, { useState } from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import { ButtonGroup, Input } from 'react-native-elements';

import styles from './styles';

const UserForm: React.FC = () => {
  const [userTypeSelectedIndex, setUserTypeSelectedIndex] = useState(0);
  const userTypes = ['Customer', 'Waiter', 'Admin'];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Input
          label='Nome'
          value={''}
          onChangeText={() => {}}
          style={styles.textInput}
          inputStyle={styles.textInputText}
          labelStyle={styles.labelStyle}
        />
        <Input
          label='CPF'
          value={''}
          onChangeText={() => {}}
          style={styles.textInput}

          inputStyle={styles.textInputText}
          labelStyle={styles.labelStyle}
        />
        <Input
          label='Celular'
          value={''}
          onChangeText={() => {}}
          style={styles.textInput}
          inputStyle={styles.textInputText}
          labelStyle={styles.labelStyle}
        />
        <Input
          label='Data de nascimento'
          value={''}
          onChangeText={() => {}}
          style={styles.textInput}
          inputStyle={styles.textInputText}
          labelStyle={styles.labelStyle}
        />
        {
          (!'') && userTypeSelectedIndex != 0 ? (
            <Input
              disabled={userTypeSelectedIndex == 0}
              label='Senha'
              value={''}
              onChangeText={() => {}}
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
      </ScrollView>
    </SafeAreaView>
  );
}

export default UserForm;