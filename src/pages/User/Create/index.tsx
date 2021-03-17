import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import HeaderButton from '../../../components/Header/Button';
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
        <HeaderButton onPress={() => {navigation.goBack()}} iconName="chevron-left"/>
      )
    });
  }, [navigation]);
  
  return (
    <View style={styles.container}>
      <UserForm user={user} action={user ? 'Salvar' : 'Criar'} afterSubmit={() => {navigation.goBack()}}/>
    </View>
  );
}

export default UserCreate;