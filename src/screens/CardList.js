import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
} from 'react-native';
import Card from '../components/Card';
import Header from '../components/Headers';
import {Constants} from '../styles/constants/constant';

const DATA = [
  {
    id: '6',
    cardHeader: 'CheckBox',
    iconName: 'home',
    backgroundColor: '#93277F',
    color: '#F472B6',
    detailPage: 'CheckboxDetail',
  },
  {
    id: '9',
    cardHeader: 'Image',
    iconName: 'home',
    backgroundColor: '#7FD9A7',
    color: '#36A968',
    detailPage: 'ImageDetail',
  },
  {
    id: '7',
    cardHeader: 'Alert',
    iconName: 'info',
    backgroundColor: '#1C4B99',
    color: '#3597DC',
    detailPage: 'AlertDetail',
  },
  {
    id: '8',
    cardHeader: 'Modal',
    iconName: 'home',
    backgroundColor: '#7FD9A7',
    color: '#36A968',
    detailPage: 'ModalDetail',
  },
  {
    id: '1',
    cardHeader: 'Button',
    iconName: 'home',
    backgroundColor: '#369FB7',
    color: '#67E8F9',
    detailPage: 'ButtonDetail',
  },
  {
    id: '9',
    cardHeader: 'Textarea',
    iconName: 'home',
    backgroundColor: '#7FD9A7',
    color: '#36A968',
    detailPage: 'TextareaDetail',
  },
  {
    id: '2',
    cardHeader: 'Box',
    iconName: 'inventory',
    backgroundColor: '#ED6F18',
    color: '#FACB4A',
    detailPage: 'BoxDetail',
  },
  {
    id: '4',
    cardHeader: 'Text',
    iconName: 'badge',
    backgroundColor: '#36A968',
    color: '#86EFAC',
    detailPage: 'TextDetail',
  },
  {
    id: '5',
    cardHeader: 'Input',
    iconName: 'input',
    backgroundColor: '#318CCB',
    color: '#1C4B99',
    detailPage: 'InputDetail',
  },
 
  {
    id: '3',
    cardHeader: 'Avatar',
    iconName: 'home',
    backgroundColor: '#482499',
    color: '#60A5FA',
    detailPage: 'AvatarDetail',
  },
 


];

const CardList = ({navigation}) => {
  const handlePress = detailPage => {
    navigation.navigate(detailPage);
  };
  const renderItem = ({item}) => (
    <Card
      cardHeader={item.cardHeader}
      iconName={item.iconName}
      backgroundColor={item.backgroundColor}
      color={item.color}
      handlePress={() => handlePress(item.detailPage)}
    />
  );
  return (
    <SafeAreaView style={styles.card}>
      <Header text="Card List" />
      {/* <View style={styles.card}>
        <Card cardHeader="Button" iconName="home" color={Constants.default} />
        <Card cardHeader="Box" iconName="home" color={Constants.default} />
        <Card cardHeader="Alert" iconName="home" color={Constants.default} />
        <Card cardHeader="Badge" iconName="home" color={Constants.default} />
        <Card cardHeader="Avatar" iconName="home" color={Constants.default} />
      </View> */}
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
});

export default CardList;
