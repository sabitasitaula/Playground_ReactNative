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
        marginBottom: 40,
        marginHorizontal: 25,
      }}>
      <Text style={{ color:"black",fontSize:20,margin:6}}>Sabita</Text>
    </View>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      <View>
        <Text style={{width: 50, textAlign: 'center',color:'black',fontWeight:'bold',fontSize:20}}>Hello</Text>
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
