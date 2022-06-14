import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Avatar = ({Img, borderRadius, borderWidth, borderColor}) => {
  return (
    <View style={styles.imageContainer(borderWidth, borderRadius, borderColor)}>
      <Image source={Img} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: (borderWidth, borderRadius, borderColor) => ({
    overflow: 'hidden',
    flex: 1,
    borderRadius,
    borderColor,
    width: 200,
    height: 200,
    borderWidth,
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: '23%',
    marginVertical: '10%',
  }),
  image: {
    width: 200,
    height: 200,
  },
});

export default Avatar;
