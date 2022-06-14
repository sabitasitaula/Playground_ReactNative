import React, {useState} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CheckboxComponent = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
          style={styles.CheckboxComponent}
          tintColors={toggleCheckBox ? 'black' : 'red'}
        />
        <Text style={styles.label}>Do you like ?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    height: 300,
  },
  checkbox: {
    alignSelf: 'center',
  },
  CheckboxComponent: {
    color: 'black',
    borderColor: 'black',
  },
  label: {
    margin: 8,
    color: 'black',
    fontSize: 15,
  },
});

export default CheckboxComponent;
