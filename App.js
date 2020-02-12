//import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, View, Container } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/HomeScreen';
import Other from './src/Other';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Other" component={Other} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
