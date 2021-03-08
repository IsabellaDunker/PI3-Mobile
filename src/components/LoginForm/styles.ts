import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.background,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 80,
    fontSize: 24,
    color: colors.font
  },
  textInput:{
    marginVertical: 10,
    marginLeft: 8,
  },
  textInputText:{
    color: colors.font
  },
  textInputContainer:{
    paddingHorizontal: '10%',
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
});

export default styles;