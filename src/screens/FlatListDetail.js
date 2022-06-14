import React from 'react';
import {View} from 'react-native';
import Card from '../components/Card';
import FlatListComponent from '../components/FlatList';
import Header from '../components/Headers';

const DATA = [
  {
    id: '1',
    cardHeader: 'One',
    iconName: 'inventory',
    backgroundColor: '#ED6F18',
    color: '#FACB4A',
  },
  {
    id: '2',
    cardHeader: 'Two',
    iconName: 'inventory',
    backgroundColor: '#ED6F18',
    color: '#FACB4A',
  },
  {
    id: '3',
    cardHeader: 'Three',
    iconName: 'inventory',
    backgroundColor: '#ED6F18',
    color: '#FACB4A',
  },
  {
    id: '4',
    cardHeader: 'Four',
    iconName: 'inventory',
    backgroundColor: '#ED6F18',
    color: '#FACB4A',
  },
];

const FlatListDetail = () => {
  const renderItem = ({item}) => (
    <Card
      cardHeader={item.cardHeader}
      iconName={item.iconName}
      backgroundColor={item.backgroundColor}
      color={item.color}
    />
  );
  return (
    <View>
      <Header text="Flat List" />
      <FlatListComponent numColumns={2} DATA={DATA} renderItem={renderItem} />
    </View>
  );
};

export default FlatListDetail;
