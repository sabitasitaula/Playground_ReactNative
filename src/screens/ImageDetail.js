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
      <Img
        source={{
          uri: 'https://images.unsplash.com/photo-1655117041830-533c495ae7b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
        }}
      />
    </ScrollView>
  );
};

export default ImageDetail;
