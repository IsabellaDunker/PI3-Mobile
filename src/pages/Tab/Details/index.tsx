import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const TabDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>
        No orders yet
      </Text>
    </View>
  );
}

export default TabDetails;