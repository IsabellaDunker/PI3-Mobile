import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

import styles from './styles';
import { useAuth } from '../../contexts/auth';


const Home: React.FC = () => {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Button 
        title="Sair"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={logout}
      />
    </View>
  );
}

export default Home;