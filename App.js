import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Home.js';
import QuestionScreen from './src/Question.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f927a8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} options={{ title: 'New Question' }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
