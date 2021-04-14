import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { colors } from '../../../config/colors';
import { useTab } from '../../../contexts/tab';
import { cpfMask } from '../../../utils/masks';

import styles from './styles';

const TabList: React.FC = () => {
  const { tabs } = useTab();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {
        tabs.map((tab, index) => (
          <ListItem 
            key={index}
            bottomDivider
            containerStyle={styles.itemContainer}
            onPress={() => {
              navigation.navigate('TabDetails', {tab})
            }}
          >
            <ListItem.Content>
              <ListItem.Title style={styles.itemFont}>{tab.user.name}</ListItem.Title>
              <ListItem.Subtitle style={styles.itemFont}>{cpfMask(tab.user.cpf)}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color={colors.font} />
          </ListItem>
        ))
      }
      
    </View>
  );
}

export default TabList;