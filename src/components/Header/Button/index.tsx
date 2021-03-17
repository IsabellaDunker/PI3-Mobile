import React from 'react';
import { Button, Icon } from 'react-native-elements';
import { colors } from '../../../config/colors';

import styles from './styles';

interface IHeaderButtonProps {
  onPress(): void;
  iconName: string;
}

const HeaderButton: React.FC<IHeaderButtonProps> = (props) => {
  const { onPress, iconName } = props;

  return (
    <>
      <Button
          icon={
            <Icon
              name={iconName}
              size={24}
              color={colors.font}
            />
          }
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          onPress={onPress}
        />
    </>
  );
}

export default HeaderButton;