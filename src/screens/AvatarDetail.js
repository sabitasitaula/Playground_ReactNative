import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Header from '../components/Headers';
// import {Avatar,Badge} from '@rneui/themed';
import me from '../assets/Me.jpeg';
import lady from '../assets/lady1.jpg';
import git from '../assets/git.jpg';
import Avatar from '../components/Avatar';

const AvatarDetail = () => {
  return (
    <ScrollView style={styles.boxContainer}>
      <Header text="Avatar" />
      <Avatar Img={me} borderRadius={100} borderWidth={1} borderColor="green" />
      <Avatar Img={lady} borderRadius={10} borderWidth={1} borderColor="red" />
      <Avatar Img={git} borderRadius={10} borderWidth={5} borderColor="red" />
      <Avatar Img={me} borderRadius={100} borderWidth={6} borderColor="green" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
  },
});

export default AvatarDetail;
