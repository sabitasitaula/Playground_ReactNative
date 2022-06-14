import {SafeAreaView, TextInput, StyleSheet, View} from 'react-native';
import React from 'react';

const Input = ({
  secureTextEntry,
  placeholder,
  value,
  onChangeText,
  type,
  borderBottom = false,
}) => {
  return (
    <TextInput
      style={borderBottom ? styles.border : styles.input}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      defaultValue={value}
      onChangeText={onChangeText}
      placeholderTextColor="black"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 2,
    margin: '5%',
    color: 'black',
    borderRadius: 15,
    padding: 7,
  },
  border: {
    width: '90%',
    borderStyle: 'solid',
    margin: '7%',
    border: 'none',
    borderColor: 'gray',
    padding: 7,
    borderBottomWidth: 2,
  },
});

export default Input;
