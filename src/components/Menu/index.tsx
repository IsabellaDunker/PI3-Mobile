import React from 'react';
import { View, Text } from 'react-native';

import { Icon, ListItem } from 'react-native-elements';
import { colors } from '../../config/colors';

import styles from './styles';

const Menu: React.FC = () => {
  const items = [
    {
      title: 'Usuários',
      icon: 'people',
    },
    {
      title: 'Cardápio',
      icon: 'fastfood'
    },
    {
      title: 'Comandas',
      icon: 'list-alt',
    },
    {
      title: 'Pedidos',
      icon: 'shopping-cart'
    }
    
  ]

  return (
    <View style={styles.container}>
      {
        items.map((item, index) => (
          <ListItem 
            key={index}
            bottomDivider
            containerStyle={styles.itemContainer}
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