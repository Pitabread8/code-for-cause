import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Home.js';
import LoginScreen from './src/Login.js';
import QuestionScreen from './src/Question.js';
import SolutionsScreen from './src/Solutions.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SolutionsScreen" component={SolutionsScreen} />
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
