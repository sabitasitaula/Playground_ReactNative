import React, {useState} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CheckboxComponent = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Text style={styles.text}>Like?</Text>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}

        />
        <Text style={styles.label}>Do you like ?</Text>
      </View>
      <Text>Is liked: {toggleCheckBox ? 'Yes' : 'No'}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    height:300
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    color:'black'
  },
  text: {
    color:'red'
  }
});

export default CheckboxComponent;
