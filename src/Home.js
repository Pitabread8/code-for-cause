
import * as React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

import { FontAwesome5 } from '@expo/vector-icons';
import PagerView from 'react-native-pager-view';
import { useNavigation } from '@react-navigation/native';

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
  },
  reelPage: {
    BackgroundColor: 'black'

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
    <View style={styles.reelPage}>
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
  console.log("page has scrolled")
}

export default function HomeScreen() {

  return (
    <PagerView style={styles.pagerView} initialPage={0} orientation="vertical" onPageScroll={pageHasScrolled()}>
      <View key="1" style={styles.container}>
        <View style={styles.container}>
          <VideoPlayer uriIn='https://vod-progressive.akamaized.net/exp=1702186250~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4996%2F16%2F424984267%2F1840393183.mp4~hmac=428ef288a42aa1e6cdf9f4e72cd4c40295d78f490c81d39944095c9ca359d113/vimeo-prod-skyfire-std-us/01/4996/16/424984267/1840393183.mp4'>
          </VideoPlayer>
        </View>
      </View>
      <View key="2">
        <VideoPlayer uriIn='https://vod-progressive.akamaized.net/exp=1702186250~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4996%2F16%2F424984267%2F1840393183.mp4~hmac=428ef288a42aa1e6cdf9f4e72cd4c40295d78f490c81d39944095c9ca359d113/vimeo-prod-skyfire-std-us/01/4996/16/424984267/1840393183.mp4'>
          <Text>Video 2 should go here</Text>
        </VideoPlayer>
      </View>
      <View key="3">
        <VideoPlayer uriIn='https://vod-progressive.akamaized.net/exp=1702186250~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4996%2F16%2F424984267%2F1840393183.mp4~hmac=428ef288a42aa1e6cdf9f4e72cd4c40295d78f490c81d39944095c9ca359d113/vimeo-prod-skyfire-std-us/01/4996/16/424984267/1840393183.mp4'>
          <Text>Video 2 should go here</Text>
        </VideoPlayer>
      </View>
    </PagerView>
  );
};
