import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import AuthContext from '../../contexts/auth';

const Home: React.FC = () => {
  const {auth} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>
        Oi
      </Text>
    </View>
  );
}

export default Home;