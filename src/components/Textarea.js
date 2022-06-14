import React, {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

const Textarea = ({
  numberOfLines,
  placeholder,
  value,
  onChangeHandler,
  borderColor = 'gray',
  borderRadius = 15,
  borderWidth = 2,
  borderBottom = false,
}) => {
  return (
    <View>
      <TextInput
        style={
          borderBottom
            ? styles.border(borderColor, borderWidth, borderRadius)
            : styles.input(borderColor, borderWidth, borderRadius)
        }
        multiline={true}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        defaultValue={value}
        onChangeText={onChangeHandler}
        placeholderTextColor="black"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: (borderColor, borderWidth, borderRadius) => ({
    width: '90%',
    borderStyle: 'solid',
    borderColor,
    borderWidth,
    margin: '5%',
    color: 'black',
    borderRadius,
    padding: 7,
  }),
  border: (borderColor, borderWidth, borderRadius) => ({
    width: '90%',
    borderStyle: 'solid',
    border:'none',
    borderColor,
    margin: '5%',
    borderBottomWidth:borderWidth,
    color: 'black',
    padding: 7,
  }),
});
export default Textarea;
