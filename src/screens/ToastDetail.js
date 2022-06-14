import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  Button,
  StatusBar,
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import Input from '../components/Input';

const ToastDetail = () => {
  const showToast = () => {
    ToastAndroid.show('Form Submitted successfully !', ToastAndroid.SHORT);
  };
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'Showing another Toast',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Another toast appeared!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };
  return (
    <ScrollView>
      <Input placeholder="enter email" />
      <ButtonComponent text="Submit" color="green" onPress={showToast} />
      <ButtonComponent
        text="Toast"
        color="red"
        onPress={showToastWithGravity}
      />
      <ButtonComponent text="Toast" onPress={showToastWithGravityAndOffset} />
    </ScrollView>
  );
};

export default ToastDetail;
