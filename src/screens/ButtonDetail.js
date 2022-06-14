import React from 'react';
import {ScrollView, View} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import Header from '../components/Headers';
import {Constants} from '../styles/constants/constant';

const ButtonDetail = () => {
  return (
    <ScrollView>
      <Header text="Buttons" />
      <ButtonComponent color={Constants.success} text="Button" />
      <ButtonComponent color={Constants.success} filled={true} text="Button" />
      <ButtonComponent color={Constants.danger} text="Button" />
      <ButtonComponent color={Constants.danger} filled={true} text="Button" />

      <ButtonComponent
        color={Constants.danger}
        filled={true}
        text="Button"
        iconName="home"
      />
    </ScrollView>
  );
};

export default ButtonDetail;
