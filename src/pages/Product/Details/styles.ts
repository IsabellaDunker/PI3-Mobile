import { StyleSheet } from 'react-native';
import { colors } from '../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10
  },
  descriptionContainer: {
    flex: 1,
    width: '100%',
    marginTop: 10,
  },
  description: {
    color: colors.font
  },
  productName: {
    color: colors.font,
    fontSize: 24
  },
  envName: {
    color: colors.font,
    fontSize: 16
  },
  productPrice: {
    color: colors.font
  },
  addButton: {
    backgroundColor: colors.button
  },
  buttonText: {
    color: colors.font
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 20
  }
})

export default styles;