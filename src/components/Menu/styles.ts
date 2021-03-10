import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.background,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 10
  },
  itemContainer: {
    backgroundColor: colors.background,
    width: '96%',
  },
  itemFont: {
    color: colors.font
  }
});

export default styles;