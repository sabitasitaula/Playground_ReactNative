import {Button} from '@rneui/base';
import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Header from '../components/Headers';
import {Constants} from '../styles/constants/constant';
import ButtonComponent from './ButtonComponent';

const AlertComponent = ({ButtonName, title, description, button1, button2}) => {
  const createAlert = () =>
    Alert.alert(title, description, [
      {
        text: button1,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: button2, onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <View style={styles.container}>
      <ButtonComponent
        text={ButtonName}
        onPress={createAlert}
        color={Constants.default}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default AlertComponent;
