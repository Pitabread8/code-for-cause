import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { Video } from 'expo-av';


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
  


const Solution = (uriIn, text) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({
      shouldPlay: false,
    });

    const togglePlay = () => {
        setStatus((prevStatus) => ({
          ...prevStatus,
          shouldPlay: !prevStatus.shouldPlay,
        }));
      };

    return (
        <View>
            <Text>Solution Information goes here </Text>

            <Video
            ref={video}
            style={styles.video}
            source={{
                uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            shouldPlay={status.shouldPlay}
            onPlaybackStatusUpdate={(newStatus) => setStatus(() => newStatus)}
            />

            <Text>
                Text
            </Text>
        </View>
  
    );
  };



const SolutionsScreen = ({ navigation, route }) => {
    return (
        
        <Solution uriIn = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" text = "Here is my sample problem"> </Solution>

        
    );
};

export default SolutionsScreen;
