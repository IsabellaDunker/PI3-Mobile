import { StyleSheet } from 'react-native';
import { colors } from '../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: '5%',
    paddingBottom: 12
  },
  button:{
    backgroundColor: colors.button
  },
  buttonContainer:{
    width: '80%',
    marginTop: 10
  },
  buttonTitle: {
    color: colors.font
  }
})

export default styles;