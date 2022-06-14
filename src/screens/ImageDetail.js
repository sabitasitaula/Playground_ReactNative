import React from 'react';
import {ScrollView} from 'react-native';
import Img from '../components/Img';
import me from '../assets/Me.jpeg';
import lady from '../assets/lady1.jpg';
import git from '../assets/git.jpg';
import Header from '../components/Headers';

const ImageDetail = () => {
  return (
    <ScrollView>
      <Header text="Image" />
      <Img source={me} borderWidth={5} borderColor="green" />
      <Img
        source={lady}
        borderWidth={7}
        borderColor="purple"
        borderRadius={50}
      />
      <Img
        source={git}
        borderWidth={15}
        borderColor="purple"
        borderRadius={100}
      />
    </ScrollView>
  );
};

export default ImageDetail;
