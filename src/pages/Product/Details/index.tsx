import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text } from 'react-native';
import HeaderButton from '../../../components/Header/Button';
import { IProductData } from '../../../interfaces/product';
import { Tile, Button, Input } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input'

import styles from './styles';
import { colors } from '../../../config/colors';

interface Params {
  product: IProductData;
}

const ProductDetails: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { product } = route.params as Params;

  const [ units, setUnits ] = useState(1);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton onPress={() => {navigation.goBack()}} iconName="chevron-left"/>
      )
    });
  }, [navigation]);

  useEffect(() => {
    console.log(product);
  }, []);

  return (
    <View style={styles.container}>
      <Tile 
        imageSrc={{uri: "https://tecnomonte.com.br/wp-content/uploads/2019/09/no-image.jpg"}}
        featured
        titleStyle={styles.productName}
      />
      <View style={{flex: 1, width: '100%', paddingHorizontal: 18}}>
        <View style={styles.titleContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.envName}>{product.environment.name}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </Text>
        </View>
      </View>
      
      
      <View style={styles.bottomContainer}>
        <NumericInput 
          valueType='integer'
          value={units}
          onChange={setUnits}
          minValue={1}
          totalHeight={40}
          textColor={colors.font}
          borderColor={colors.button}
          iconStyle={{ color: colors.font }}
          inputStyle={{ backgroundColor: colors.button}}
          rightButtonBackgroundColor={colors.button}
          leftButtonBackgroundColor={colors.button}
          rounded
        />
        <Button
          icon={{
            name: "shopping-cart",
            size: 15,
            color: colors.font
          }}
          title={`Adicionar  R$${product.price * units} `}
          buttonStyle={styles.addButton}
          titleStyle={styles.buttonText}
        />
      </View>
      
    </View>
  );
}

export default ProductDetails;