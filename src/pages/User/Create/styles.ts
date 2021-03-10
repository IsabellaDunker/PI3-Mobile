import { StyleSheet } from 'react-native';
import { colors } from '../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: '5%'
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
    backgroundColor: '#AAA'
  },
  buttonContainer:{
    position: 'absolute',
    bottom: 30,
    width: '70%'
  },
  button:{
    backgroundColor: colors.button
  },
  buttonTitle: {
    color: colors.font
  }
})

export default styles;