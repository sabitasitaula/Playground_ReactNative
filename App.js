import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from './src/routes/route';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map(screen => (
          <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />
        ))}
      </Stack.Navigator>
      </NavigationContainer>
  );
};



export default App;
