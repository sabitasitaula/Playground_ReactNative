import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import me from '../assets/Me.jpeg';
import lady from '../assets/lady1.jpg';
import git from '../assets/git.jpg';

const Img = ({source, borderWidth, borderColor, borderRadius}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={source}
        style={styles.image(borderColor, borderWidth, borderRadius)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 19,
    flex: 1,
    alignItems: 'center',
  },
  image: (borderColor, borderWidth, borderRadius) => ({
    borderColor,
    height: 200,
    width: 200,
    borderWidth,
    borderColor,
    borderRadius,
  }),
});

export default Img;
