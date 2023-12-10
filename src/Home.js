
// List of apis you can use with react native is found here: 
// https://reactnative.dev/docs/stylesheet
// https://reactnative.dev/docs/flatlist
// How to start the project: 
// https://blog.expo.dev/the-new-expo-cli-f4250d8e3421
// use npx expo start in the /Weatherapp to run it 

// how to install the navigator https://youtu.be/obH0Po_RdWk?si=klORU0qd5ZSoEnF2&t=9018




import * as React from 'react';
import { View, StyleSheet, Button, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

import { FontAwesome5 } from '@expo/vector-icons';
import PagerView from 'react-native-pager-view';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestionScreen from './Question.js';


// import Animated, { useHandler, useEvent } from 'react-native-reanimated';


import SolutionsScreen from './Solutions.js';

const styles = StyleSheet.create({
  overlay: {
    position: 'fixed',
    right: 0,
    top: 0,
    backgroundColor: 'black',
    color: 'black'

  },
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',

    width: '100%',
    height: '100%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeButton: {
    position: 'absolute',
    bottom: '40%',
    right: '5%',
    alignSelf: 'flex-end',

  },
  questionButton: {
    position: 'absolute',
    bottom: '20%',
    right: '5%',
    alignSelf: 'flex-end',

  },
  solutions: {
    position: 'absolute',
    bottom: '30%',
    right: '7%',
    alignSelf: 'flex-end',

  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }

});


const VideoPlayer = ({ uriIn }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({
    shouldPlay: false,
  });

  const navigation = useNavigation();

  const togglePlay = () => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      shouldPlay: !prevStatus.shouldPlay,
    }));
  };

  const likeVideo = () => {

    console.log('Icon clicked!');
  };

  const goToSolutions = () => {
    navigation.navigate('SolutionsScreen')

  };
  const askQuestion = () => {
    navigation.navigate('QuestionScreen')
  }

  return (
    <View>
      <TouchableWithoutFeedback onPress={togglePlay}>

        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: uriIn,
          }}
          useNativeControls={false}
          resizeMode="contain"
          isLooping
          shouldPlay={status.shouldPlay}
          onPlaybackStatusUpdate={(newStatus) => setStatus(() => newStatus)}
        />


      </TouchableWithoutFeedback>
      <View style={styles.solutions}>
        <TouchableOpacity onPress={goToSolutions}>
          <FontAwesome5 name="lightbulb" size={50} color="black" />
        </TouchableOpacity>

      </View>

      <View style={styles.likeButton}>
        <TouchableOpacity onPress={likeVideo}>
          <FontAwesome5 name="heart" size={50} color="black" />
        </TouchableOpacity>

      </View>

      <View style={styles.questionButton}>
        <TouchableOpacity onPress={askQuestion}>
          <FontAwesome5 name="rocketchat" size={50} color="black" />
        </TouchableOpacity>

      </View>



    </View>
  );
};


function pageHasScrolled() {
  console.log("page has Scrolled")

}

const Page = ({ navigation }) => {

  const video2 = React.useRef(null);
  const [status2, setStatus2] = React.useState({});
  // const AnimatedPager = Animated.createAnimatedComponent(PagerView);

  //backup uri's: 
  //
  



  return (
    <PagerView style={styles.pagerView} initialPage={0} orientation="vertical" onPageScroll={pageHasScrolled()}>
      <View key="1" style={styles.container}>

        <View style={styles.container}>
          <VideoPlayer uriIn='https://vod-progressive.akamaized.net/exp=1702180119~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F660%2F16%2F403302551%2F1724578450.mp4~hmac=64f60ea982232335f80b0859fae7d389c103b24c3e5e6e339b9353c3bec97b22/vimeo-prod-skyfire-std-us/01/660/16/403302551/1724578450.mp4'>


          </VideoPlayer>


        </View>


      </View>
      <View key="2">
        <VideoPlayer uriIn='https://vod-progressive.akamaized.net/exp=1702180119~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F660%2F16%2F403302551%2F1724578450.mp4~hmac=64f60ea982232335f80b0859fae7d389c103b24c3e5e6e339b9353c3bec97b22/vimeo-prod-skyfire-std-us/01/660/16/403302551/1724578450.mp4'>
          <Text>Video 2 should go here</Text>
        </VideoPlayer>
      </View>
      <View key="3">
        <VideoPlayer uriIn='https://vod-progressive.akamaized.net/exp=1702180119~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F660%2F16%2F403302551%2F1724578450.mp4~hmac=64f60ea982232335f80b0859fae7d389c103b24c3e5e6e339b9353c3bec97b22/vimeo-prod-skyfire-std-us/01/660/16/403302551/1724578450.mp4'>
          <Text>Video 2 should go here</Text>
        </VideoPlayer>
      </View>

    </PagerView>

  );
};





const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator initialRouteName="Home" independent = {true}>
        <Stack.Screen name="Home" component={Page} />
        <Stack.Screen name="SolutionsScreen" component={SolutionsScreen} />
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;