import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Headers';

const TextDetail = () => {
  return (
    <View>
      <Header text="Hello everyone, I am Sabita Sitaula" />
      <Header
        text="Sans Serif Condensed text"
        fontFamily="sans-serif-condensed"
        fontColor="red"
        fontSize={45}
      />
      <Header
        text="monospace Text"
        fontFamily="monospace"
        fontColor="gray"
        fontSize={20}
      />
      <Header text='sans-serif-light' fontFamily='sans-serif-light' fontColor='purple' />
    </View>
  );
};

export default TextDetail;
