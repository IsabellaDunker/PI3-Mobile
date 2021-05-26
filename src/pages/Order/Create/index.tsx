import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import HeaderButton from '../../../components/Header/Button';
import { colors } from '../../../config/colors';
import { useOrder } from '../../../contexts/order';

import styles from './styles';

const Create: React.FC = () => {
  const navigation = useNavigation();

  const { cart } = useOrder();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton onPress={() => {navigation.goBack()}} iconName="chevron-left"/>
      ),
      headerRight: () => (
        <HeaderButton onPress={() => {navigation.navigate('Order')}} iconName="add"/>
      ),
      title: 'Carrinho'
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {
        cart.map((product, index) => (
          <ListItem 
            key={index}
            bottomDivider
            containerStyle={{ ...styles.itemContainer}}
          > 
            <ListItem.Content>
              <ListItem.Title style={styles.itemFont}>{product.name}</ListItem.Title>
              <ListItem.Subtitle style={styles.itemFont}>{product.units} - {product.price}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color={colors.font} />
          </ListItem>
        ))
      }
    </View>
  );
}

export default Create;