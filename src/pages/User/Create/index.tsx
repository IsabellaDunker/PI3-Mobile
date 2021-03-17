import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import {Button} from 'react-native-elements';
import BackButton from '../../../components/Header/BackButton';
import UserForm from '../../../components/UserForm';

import { IUserData } from '../../../interfaces/user';

import styles from './styles';

interface Params {
  user: IUserData | null;
}

const UserCreate: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { user } = route.params as Params;  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <BackButton onPress={() => {navigation.goBack()}} />
      ),
    });
  }, [navigation]);
  
  return (
    <View style={styles.container}>
      <UserForm user={user} action={user ? 'Salvar' : 'Criar'}/>
    </View>
  );
}

export default UserCreate;