import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import styles from './styles';
import { useAuth } from '../../contexts/auth';
import { colors } from '../../config/colors';


const Home: React.FC = ({ navigation }) => {
  const { logout } = useAuth();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          icon={
            <Icon
              name="chevron-left"
              size={24}
              color={colors.font}
            />
          }
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          onPress={logout}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={{color: colors.font}}>
        Hello
      </Text>
    </View>
  );
}

export default Home;