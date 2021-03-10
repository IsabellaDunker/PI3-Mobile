import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text } from 'react-native';
import {Button} from 'react-native-elements';

import styles from './styles';

const UserList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>List</Text>
      <Button onPress={() => {navigation.navigate('UserCreate')}} />
    </View>
  );
}

export default UserList;