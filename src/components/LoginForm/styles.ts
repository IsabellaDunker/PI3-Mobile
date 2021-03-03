import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 80,
    fontSize: 24
  },
  textInput:{
    marginVertical: 10,
    marginLeft: 8
  },
  textInputContainer:{
    paddingHorizontal: '10%',
  },
  button:{
    position: 'absolute',
    bottom: 30,
    width: '70%'
  }
});

export default styles;