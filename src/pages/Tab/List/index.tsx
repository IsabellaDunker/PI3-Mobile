import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon, ListItem, Overlay } from 'react-native-elements';
import HeaderButton from '../../../components/Header/Button';
import { colors } from '../../../config/colors';
import { useTab } from '../../../contexts/tab';
import { IUserData } from '../../../interfaces/user';
import { cpfMask } from '../../../utils/masks';
import * as userService from '../../../services/user';
import * as tabService from '../../../services/tab';
import styles from './styles';

const TabList: React.FC = () => {
  const { tabs, getTabs } = useTab();
  
  const [ users, setUsers ] = useState<IUserData[]>([]);
  const [overlay, setOverlay] = useState(false);

  const navigation = useNavigation();

  const getUsers = async () => {
    const response = await userService.get_all();
    setUsers(response);
  }

  useEffect(() => {
    getUsers();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton onPress={() => {navigation.goBack()}} iconName="chevron-left"/>
      ),
      headerRight: () => (
        <HeaderButton onPress={() => {
          setOverlay(!overlay);
        }} iconName="add"/>
      )
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Overlay
      fullScreen
      overlayStyle={{...styles.container, height: '90%', backgroundColor: colors.background}} 
      isVisible={overlay} 
      onBackdropPress={() => {setOverlay(!overlay)}}>
        <>
          <Text style={styles.itemFont}>Selecione o cliente</Text>
          {
            users.map((user, index) => {
              return (
                
                <ListItem 
                  key={'user' + index}
                  bottomDivider
                  containerStyle={{ ...styles.itemContainer}}
                  onPress={async () => {
                    await tabService.create({ user_id: user.id });
                    setOverlay(!overlay);
                    getTabs();
                  }}
                > 
                  <ListItem.Content>
                    <ListItem.Title style={styles.itemFont}>{user.name}</ListItem.Title>
                    <ListItem.Subtitle style={styles.itemFont}>{cpfMask(user.cpf)}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron color={colors.font} />
                </ListItem>
              )
            })
          }
        </>
      </Overlay>
      {
        tabs.map((tab, index) => (
          <ListItem 
            key={'tab'+ index}
            bottomDivider
            containerStyle={styles.itemContainer}
            onPress={() => {
              navigation.navigate('TabDetails', {tab, toPay: false})
            }}
          > 
            <View>
              <Icon
                name='shopping-bag'
                color={tab.is_open ? '#0F0' : '#F00'}
              />
            </View>
            <ListItem.Content>
              <ListItem.Title style={styles.itemFont}>{tab.user.name}</ListItem.Title>
              <ListItem.Subtitle style={styles.itemFont}>{cpfMask(tab.user.cpf)}</ListItem.Subtitle>
            </ListItem.Content>
            <Button 
              key={'orders'+index}
              disabled
              disabledStyle={{backgroundColor: colors.background}}
              buttonStyle={{backgroundColor: colors.background}}
              icon={{
                name: "receipt",
                size: 15,
                color: "white"
              }}
            />
            <Button 
              key={'payment'+index}
              buttonStyle={{backgroundColor: 'green'}}
              icon={{
                name: "credit-card",
                size: 15,
                color: "white"
              }}
              onPress={() => {
                navigation.navigate('TabDetails', {tab, toPay: true})
              }}
            />
          </ListItem>
        ))
      }
      
    </View>
  );
}

export default TabList;