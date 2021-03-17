import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';

import styles from './styles';
import { useAuth } from '../../contexts/auth';
import { colors } from '../../config/colors';
import Menu from '../../components/Menu';
import HeaderButton from '../../components/Header/Button';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton onPress={logout} iconName="chevron-left"/>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Menu />
    </View>
  );
}

export default Home;