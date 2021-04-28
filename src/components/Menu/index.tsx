import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Icon, ListItem } from 'react-native-elements';
import { colors } from '../../config/colors';

import styles from './styles';

const Menu: React.FC = () => {
  const navigation = useNavigation();

  const items = [
    {
      title: 'Usuários',
      icon: 'people',
      page: 'User'
    },
    {
      title: 'Cardápio',
      icon: 'fastfood',
      page: 'Product'
    },
    {
      title: 'Comandas',
      icon: 'list-alt',
      page: 'Tab'
    },    
  ]

  return (
    <View style={styles.container}>
      {
        items.map((item, index) => (
          <ListItem 
            key={index}
            bottomDivider
            containerStyle={styles.itemContainer}
            onPress={() => {item.page ? navigation.navigate(item.page) : null}}
          >
            <Icon name={item.icon} color={colors.font}/>
            <ListItem.Content>
              <ListItem.Title style={styles.itemFont}>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color={colors.font} />
          </ListItem>
        ))
      }
    </View>
  );
}

export default Menu;