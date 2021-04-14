import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import HeaderButton from '../../../components/Header/Button';

import styles from './styles';

const TabDetails: React.FC = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton onPress={() => {navigation.goBack()}} iconName="chevron-left"/>
      )
    });
  }, [navigation]);
  
  return (
    <View style={styles.container}>
      <Text>
        No orders yet
      </Text>
    </View>
  );
}

export default TabDetails;