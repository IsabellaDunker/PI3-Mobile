import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, ScrollView, Keyboard } from 'react-native';
import { Button, ButtonGroup, Input } from 'react-native-elements';
import { Formik } from 'formik';
import { IUserData, IUserFormSubmitData } from '../../interfaces/user';

import styles from './styles';
import { useUser } from '../../contexts/user';
import { cpfMask, noBarsDate, noBarsToBrDate } from '../../utils/masks';

interface IProps {
  user: IUserData | null;
  action: string;
}

const UserForm: React.FC<IProps> = (props) => {
  const { user, action } = props;
  const { saveForm } = useUser();

  const [userTypeSelectedIndex, setUserTypeSelectedIndex] = useState(0);
  const userTypes = ['Customer', 'Waiter', 'Admin'];

  useEffect(() => {
    if(user){
      setUserTypeSelectedIndex(userTypes.indexOf(user.type));
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Formik 
        initialValues={{
          id: user?.id || null,
          name: user?.name || '',
          cpf: user?.cpf || '',
          cellphone: user?.cellphone || '',
          birth_date: noBarsDate(user?.birth_date || '') || '',
          password: '',
        }}
        onSubmit={(values) => {
          const formData = {...values, type: userTypes[userTypeSelectedIndex]} as IUserFormSubmitData
          saveForm(formData);
          Keyboard.dismiss();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <ScrollView>
              <Input
                label='Nome'
                value={values.name}
                onChangeText={handleChange('name')}
                style={styles.textInput}
                inputStyle={styles.textInputText}
                labelStyle={styles.labelStyle}
              />
              <Input
                label='CPF'
                value={cpfMask(values.cpf)}
                onChangeText={handleChange('cpf')}
                style={styles.textInput}
                inputStyle={styles.textInputText}
                labelStyle={styles.labelStyle}
              />
              <Input
                label='Celular'
                value={values.cellphone}
                onChangeText={handleChange('cellphone')}
                style={styles.textInput}
                inputStyle={styles.textInputText}
                labelStyle={styles.labelStyle}
              />
              <Input
                label='Data de nascimento'
                value={noBarsToBrDate(values.birth_date)}
                onChangeText={handleChange('birth_date')}
                style={styles.textInput}
                inputStyle={styles.textInputText}
                labelStyle={styles.labelStyle}
              />
              {
                (!user) && userTypeSelectedIndex != 0 ? (
                  <Input
                    disabled={userTypeSelectedIndex == 0}
                    label='Senha'
                    value={values.password}
                    onChangeText={handleChange('password')}
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
            <Button 
              title={action}
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              onPress={() => handleSubmit()}
            />
          </>
        )}        
      </Formik>
    </SafeAreaView>
  );
}

export default UserForm;