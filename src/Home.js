
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


const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    },
    page: {
        flex: 1,
    },
    wrapper: {
  
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
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
      // width: 450,
      // height: 197,
      // transform: [{ rotate: '90deg' }],
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
    
  });


const HomeScreen = ({ navigation }) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const video2 = React.useRef(null);
    const [status2, setStatus2] = React.useState({});
    

    return (
        
        
        
        <PagerView style={styles.pagerView} initialPage={0} orientation = "vertical">
            <View key="1"  style={styles.container}>

            <View style={styles.container}>
            <Video
              ref={video}
              style={styles.video}
              source={{
                //http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
                //https://vod-progressive.akamaized.net/exp=1702152167~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4047%2F16%2F420239207%2F1814675777.mp4~hmac=de7224af6e2fad518c3822741c3e944c96684afa57e36d52696087e10c4c9d0c/vimeo-prod-skyfire-std-us/01/4047/16/420239207/1814675777.mp4
                // https://cdn.discordapp.com/attachments/788094790071615491/1183151335495962718/IMG_8948.mov
                uri: 'https://vod-progressive.akamaized.net/exp=1702159555~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4046%2F16%2F420234573%2F1814650121.mp4~hmac=8f6cf14f6b84d0cd98e012c631a588330cc6b955fabb4282fbcefff7b3879922/vimeo-prod-skyfire-std-us/01/4046/16/420234573/1814650121.mp4',
              }}
              useNativeControls ={false}
              resizeMode="contain"
              isLooping
              shouldPlay
              onPlaybackStatusUpdate={status => setStatus(() => status)}/>
            </View> 


            </View>
            <View key="2">
            <Video
              ref={video2}
              style={styles.video}
              source={{
                //http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
                //https://vod-progressive.akamaized.net/exp=1702152167~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4047%2F16%2F420239207%2F1814675777.mp4~hmac=de7224af6e2fad518c3822741c3e944c96684afa57e36d52696087e10c4c9d0c/vimeo-prod-skyfire-std-us/01/4047/16/420239207/1814675777.mp4
                // https://cdn.discordapp.com/attachments/788094790071615491/1183151335495962718/IMG_8948.mov
                uri: 'https://vod-progressive.akamaized.net/exp=1702159555~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4046%2F16%2F420234573%2F1814650121.mp4~hmac=8f6cf14f6b84d0cd98e012c631a588330cc6b955fabb4282fbcefff7b3879922/vimeo-prod-skyfire-std-us/01/4046/16/420234573/1814650121.mp4',
              }}
              useNativeControls ={false}
              resizeMode="contain"
              isLooping
              shouldPlay
              onPlaybackStatusUpdate={status2 => setStatus2(() => status2)}/>

            </View>
            </PagerView>

        
    );
};

export default HomeScreen;





