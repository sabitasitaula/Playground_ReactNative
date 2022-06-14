import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Icon} from '@rneui/themed';
import {Constants} from '../styles/constants/constant';

const Card = ({
  cardHeader,
  iconName,
  color,
  backgroundColor,
  backgroundLightColor,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={handlePress}>
      <View style={styles.cardContainer(backgroundColor)}>
        <Text style={styles.cardHeader}>{cardHeader}</Text>
        <Icon
          containerStyle={styles.iconStyle(backgroundLightColor)}
          color={color}
          name={iconName}
          size={70}
          type="material"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    width: '35%',
    minWidth: 175,
    height: 250,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  cardContainer: backgroundColor => ({
    flex: 1,
    // width: '35%',
      backgroundColor,
      borderRadius: 15,
    
  }),
  cardHeader: {
    color: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: Constants.largeFont,
  },
  iconStyle: backgroundLightColor => ({
    padding: 30,
    backgroundColor: backgroundLightColor,
  }),
});

export default Card;
