import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Constants} from '../styles/constants/constant';
import {Icon} from '@rneui/themed';

const ButtonComponent = ({text, filled = false, color=Constants.default, iconName,onPress}) => {
  return (
    <>
      {filled ? (
        <TouchableOpacity style={styles.filledButton(color)} onPress={onPress}>
          <View style={styles.filledView}>
            <Icon
              style={styles.iconStyle}
              name={iconName}
              size={20}
              type="material"
              color="white"
            />
            <Text style={styles.filledText}>{text}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.touchableOpacity(color)} onPress={onPress}>
          <View style={styles.button}>
            <Text style={styles.text(color)}>{text}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: color => ({
    borderColor: color,
    borderWidth: Constants.borderWidth,
    color: color,
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 30,
    marginVertical: 20,
  }),
  filledButton: color => ({
    backgroundColor: color,
    padding: 10,
    marginHorizontal: 30,
    borderRadius: 50,
    marginVertical: 20,
    borderWidth: Constants.borderWidth,
    borderColor: color,
  }),
  filledText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  filledView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: color => ({
    color: color,
    textAlign: 'center',
    fontWeight: 'bold',
  }),
  iconStyle: {
    color: 'white',
  },
});

export default ButtonComponent;
