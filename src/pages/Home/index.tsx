import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { useAuth } from '../../contexts/auth';

const Home: React.FC = () => {
  const { auth } = useAuth();

  return (
    <View style={styles.container}>
      <Text>
        Oi
      </Text>
    </View>
  );
}

export default Home;