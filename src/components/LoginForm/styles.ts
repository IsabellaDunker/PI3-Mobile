import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#4e4e4e',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 80,
    fontSize: 24,
    color: '#eeeeee'
  },
  textInput:{
    marginVertical: 10,
    marginLeft: 8,
  },
  textInputText:{
    color: '#eee'
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
    backgroundColor: '#8888ee'
  },
  buttonTitle: {
    color: '#eeeeee'
  }
});

export default styles;