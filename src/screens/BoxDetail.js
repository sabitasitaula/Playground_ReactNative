import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Box from '../components/Box';
import Header from '../components/Headers';
import {Constants} from '../styles/constants/constant';

const BoxDetail = () => {
  return (
    <ScrollView style={styles.boxContainer}>
      <Header text="Box" />
      <Box color={Constants.default} />

      <Box
        color={Constants.danger}
        borderColor="black"
        borderRadius={100}
        borderWidth={5}
      />
      <Box
        color={Constants.success}
        borderColor="black"
        borderRadius={10}
        borderWidth={5}
      />
      <Box
        color="purple"
        borderColor="black"
        borderRadius={25}
        borderWidth={5}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
  },
});

export default BoxDetail;
