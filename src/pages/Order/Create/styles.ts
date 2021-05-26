import { StyleSheet } from 'react-native';
import { colors } from '../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  itemContainer: {
    backgroundColor: colors.background,
    width: '96%',
  },
  itemFont: {
    color: colors.font
  }
})

export default styles;