import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Home.js';
// import QuestionScreen from './src/Question.js';
import { Video } from 'expo-av';
import { FontAwesome5 } from '@expo/vector-icons';
import PagerView from 'react-native-pager-view';
import LoginScreen from './src/Login.js';
import QuestionScreen from './src/Question.js';
import SolutionsScreen from './src/Solutions.js';






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f927a8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createNativeStackNavigator();

// const HomeScreen = ({navigation}) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', {name: 'Jane'})
//       }
//     />
//   );
// };
// const ProfileScreen = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          // options={{ title: 'Welcome' }}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SolutionsScreen" component={SolutionsScreen} />
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false}} />
    //     {/* <Stack.Screen name="QuestionScreen" component={QuestionScreen} options={{ title: 'New Question' }} /> */}
    //     {/* <Stack.Screen name="HomeScreen" component={HomeScreen}  /> */}

    //   </Stack.Navigator>
    //   <StatusBar style="auto" />
    // </NavigationContainer>
  );
}


