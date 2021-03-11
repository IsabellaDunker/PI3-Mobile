import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  textInput:{
    marginVertical: 4,
    marginLeft: 8,
  },
  textInputText:{
    color: colors.font,
  },
  labelStyle: {
    color: colors.font,
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  buttonGroup: {
    width: '95%',
    backgroundColor: colors.background,
    marginBottom: 8
  },
  button:{
    backgroundColor: colors.button
  },
  buttonTitle: {
    color: colors.font
  }
})

export default styles;