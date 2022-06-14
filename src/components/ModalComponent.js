import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import ButtonComponent from './ButtonComponent';

export const ModalComponent = ({buttonName,modalTitle,modalDescription}) => {
  const [showModal, showModalSet] = useState(false);
  const toggleModal = () => {
    showModalSet(!showModal);
  };
  const createAlert = (title, description, button1, button2) =>
    Alert.alert(title, description, [
      {
        text: button1,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: button2, onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <View>
      <ButtonComponent text={buttonName} onPress={toggleModal} color="green" />
      {showModal && createAlert(modalTitle, modalDescription, 'OK', 'Cancel')}
    </View>
  );
};
