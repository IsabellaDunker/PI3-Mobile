import { useNavigation } from '@react-navigation/core';
import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import {Button, ListItem} from 'react-native-elements';
import BackButton from '../../../components/Header/BackButton';
import { colors } from '../../../config/colors';
import { useUser } from '../../../contexts/user';
import { cpfMask } from '../../../utils/masks';

import styles from './styles';

const UserList: React.FC = () => {
  const navigation = useNavigation();

  const { users } = useUser();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <BackButton onPress={() => {navigation.goBack()}} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {
        users.map((user, index) => (
          <ListItem 
            key={index}
            bottomDivider
            containerStyle={styles.itemContainer}
            onPress={() => {
              navigation.navigate('UserCreate', {user})
            }}
          >
            <ListItem.Content>
              <ListItem.Title style={styles.itemFont}>{user.name}</ListItem.Title>
              <ListItem.Subtitle style={styles.itemFont}>{cpfMask(user.cpf)}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color={colors.font} />
          </ListItem>
        ))
      }
    </View>
  );
}

export default UserList;