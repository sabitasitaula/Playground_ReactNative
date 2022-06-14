import {Icon} from '@rneui/themed';
import React from 'react';
import {View,StyleSheet} from 'react-native';

const IconComponent = ({color,backgroundLightColor,iconName}) => {
  return (
    <View>
      <Icon
        containerStyle={styles.iconStyle(backgroundLightColor)}
        color={color}
        name={iconName}
        size={40}
        type="material"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: backgroundLightColor => ({
    padding: 30,
    backgroundColor: backgroundLightColor,
  }),
});

export default IconComponent;
