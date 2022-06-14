import {Button} from '@rneui/base';
import React, {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import Toast from 'react-native-toast-message';
import ButtonComponent from '../components/ButtonComponent';
import Header from '../components/Headers';
import Input from '../components/Input';

const InputDetail = () => {
  const [email, emailSet] = useState('');

  const emailHandler = val => {
    emailSet(val);
  };

  // const handleButtonPress = () => {
  //   Toast.show({
  //     type: 'success',
  //     text1: 'Successful',
  //     text2: 'Form submitted successfully',
  //   });
  // };
  return (
    <View>
      <Header text="Input" />
      {/* <Toast /> */}
      <Input
        placeholder="Enter Email"
        value={email}
        onChangeText={emailHandler}
      />
      <Input placeholder="Enter Email" borderBottom={true} />
      <Input placeholder="Enter Password" secureTextEntry={true} />
      <Input
        placeholder="Enter Password"
        secureTextEntry={true}
        borderBottom={true}
      />

      {/* <ButtonComponent text="Submit" onPress={() => handleButtonPress()} /> */}
    </View>
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
});
export default InputDetail;
