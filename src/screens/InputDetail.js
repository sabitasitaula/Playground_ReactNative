import {Button} from '@rneui/base';
import React, {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import Toast from 'react-native-toast-message';
import Input from '../components/Input';

const InputDetail = () => {
  const [email, emailSet] = useState('');

  const emailHandler = val => {
    emailSet(val);
  };

  const handleButtonPress = () => {
    Toast.show({
      type: 'success',
      text1: 'Successful',
      text2: 'Form submitted successfully',
    });
  };
  return (
    <View>
      <Toast />
      <Input placeholder="Enter Email" value={email} onChangeText={emailHandler} />
      <Input placeholder="Enter Password" secureTextEntry={true}  />
      
      {/* <TextInput
        style={styles.input}
        placeholder="Enter Email"
        defaultValue={email}
        onChangeText={emailHandler}
        placeholderTextColor="black"
      /> */}
      <Button title="Submit " onPress={() => handleButtonPress()} />
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


// import React, { useState } from "react";
// import { View, Switch, StyleSheet } from "react-native";

// const InputDetail = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//   return (
//     <View style={styles.container}>
//       <Switch
//         trackColor={{ false: "#767577", true: "#81b0ff" }}
//         thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// export default InputDetail;