import { colors } from '../config/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer:{
    paddingLeft: 8
  },
  button:{
    backgroundColor: colors.button
  },
  buttonTitle: {
    color: colors.font
  }
})

export default styles;