import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import * as React from 'react';
import {NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Home.js';
import QuestionScreen from './src/Question.js';
import { Video } from 'expo-av';
import { FontAwesome5 } from '@expo/vector-icons';
import PagerView from 'react-native-pager-view';






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
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} options={{ title: 'New Question' }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


