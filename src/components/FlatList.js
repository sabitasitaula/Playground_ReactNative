import React from 'react';
import {View, FlatList} from 'react-native';

const FlatListComponent = ({numColumns, renderItem, DATA}) => {
  return (
    <FlatList
      numColumns={numColumns}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default FlatListComponent;
