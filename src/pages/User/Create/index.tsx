import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text } from 'react-native';
import {Button} from 'react-native-elements';

import styles from './styles';

const UserCreate: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Create</Text>
      <Button onPress={() => {navigation.navigate('UserList')}} />
    </View>
  );
}

export default UserCreate;