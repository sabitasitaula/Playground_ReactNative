import React from 'react';
import {View, StyleSheet} from 'react-native';

const Box = ({color,borderColor,borderRadius,borderWidth}) => {
  return <View style={styles.box(color,borderColor,borderRadius,borderWidth)}></View>;
};

const styles = StyleSheet.create({
  box: (color,borderColor,borderRadius,borderWidth) => ({
    width: '70%',
    height: 150,
    borderColor: 'black',
    backgroundColor: color,
    marginHorizontal: 60,
    marginVertical: 20,
    borderWidth,
    borderRadius,
    borderColor
  }),
});

export default Box;
