import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Headers';
import {CheckBox, Icon} from '@rneui/themed';
import CheckboxComponent from '../components/CheckboxComponent';

const CheckboxDetail = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  return (
    <View>
      <Header text="Checkbox" />
      {/* <CheckBox
        center
        title="Click"
        checked={check1}
        onPress={() => setCheck1(!check1)}
      /> */}

      {/* <CheckBox
        center
        title="Click"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check2}
        onPress={() => setCheck2(!check2)}
      /> */}

      <CheckboxComponent />
    </View>
  );
};

export default CheckboxDetail;
