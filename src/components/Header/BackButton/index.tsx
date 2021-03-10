import React from 'react';
import { Button, Icon } from 'react-native-elements';
import { colors } from '../../../config/colors';

import styles from './styles';

interface IBackButtonProps {
  onPress(): void;
}

const BackButton: React.FC<IBackButtonProps> = (props) => {
  const { onPress } = props;

  return (
    <>
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
          onPress={onPress}
        />
    </>
  );
}

export default BackButton;