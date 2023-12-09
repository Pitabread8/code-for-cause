
// List of apis you can use with react native is found here: 
// https://reactnative.dev/docs/stylesheet
// https://reactnative.dev/docs/flatlist
// How to start the project: 
// https://blog.expo.dev/the-new-expo-cli-f4250d8e3421
// use npx expo start in the /Weatherapp to run it 

// how to install the navigator https://youtu.be/obH0Po_RdWk?si=klORU0qd5ZSoEnF2&t=9018


// import * as React from 'react';
// import {useState} from 'react';
// import { SafeAreaView, ScrollView, FlatList, StyleSheet, Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Video, ResizeMode } from 'expo-av';



import * as React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Video } from 'expo-av';

import PagerView from 'react-native-pager-view';
// import Animated, { useHandler, useEvent } from 'react-native-reanimated';

const styles = StyleSheet.create({
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
    
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
    
  });

const VideoPlayer = ({uriIn}) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    
        <Video
        ref={video}
        style={styles.video}
        source={{
          uri: uriIn,
        }}
        useNativeControls ={false}
        resizeMode="contain"
        isLooping
        shouldPlay
        onPlaybackStatusUpdate={status => setStatus(() => status)}/>

  )

}
  

function pageHasScrolled(){
  console.log("page has Scrolled")

}
const HomeScreen = ({ navigation }) => {
    
    const video2 = React.useRef(null);
    const [status2, setStatus2] = React.useState({});
    // const AnimatedPager = Animated.createAnimatedComponent(PagerView);


    return (
       
        <PagerView style={styles.pagerView} initialPage={0} orientation = "vertical" onPageScroll={pageHasScrolled()}>
            <View key="1"  style={styles.container}>

            <View style={styles.container}>
                <VideoPlayer uriIn = 'https://vod-progressive.akamaized.net/exp=1702159555~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4046%2F16%2F420234573%2F1814650121.mp4~hmac=8f6cf14f6b84d0cd98e012c631a588330cc6b955fabb4282fbcefff7b3879922/vimeo-prod-skyfire-std-us/01/4046/16/420234573/1814650121.mp4'>


                </VideoPlayer>


            </View> 


            </View>
            <View key="2">
              <VideoPlayer uriIn = 'https://vod-progressive.akamaized.net/exp=1702159555~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4046%2F16%2F420234573%2F1814650121.mp4~hmac=8f6cf14f6b84d0cd98e012c631a588330cc6b955fabb4282fbcefff7b3879922/vimeo-prod-skyfire-std-us/01/4046/16/420234573/1814650121.mp4'>

                </VideoPlayer>
            </View>
            </PagerView>

        
    );
};

export default HomeScreen;





