import * as React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Header from '../components/Headers';

const DividerDetail = () => (
  <ScrollView>
    <Header text="Divider" />
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginVertical: 10,
        marginHorizontal: 15,
      }}>
      <Text>Mango</Text>
    </View>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      <View>
        <Text style={{width: 50, textAlign: 'center'}}>Hello</Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
    </View>

    <View style={styles.lineStyle}></View>
  </ScrollView>
);
const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 30,
  },
});
export default DividerDetail;
