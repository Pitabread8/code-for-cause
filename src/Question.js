import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Video } from 'expo-av';

const styles = StyleSheet.create({
    container: {
        padding: 50,
        backgroundColor: '#fff',
        display: 'flex',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        paddingTop: 3,
        textAlign: 'center',
    }
});

const UploadImage = () => {
    const [image, setImage] = useState(null);
    const addImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [9, 16],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.assets[0].uri);
        }
    }
    return (
        <View>
            {
                image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
            }
            <View>
                <TouchableOpacity onPress={addImage}>
                    <Text style={styles.text}>{image ? 'Edit' : 'Upload'} Image</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const UploadVideo = () => {
    const [video, setVideo] = useState(null);
    const addVideo = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            aspect: [9, 16],
            quality: 1,
        });
        if (!result.cancelled) {
            setVideo(result.assets[0].uri);
        }
    }
    return (
        <View>
            {
                video && <Video
                    source={{ uri: video }}
                    style={{ width: 200, height: 200 }}
                    useNativeControls
                    isLooping
                />
            }
            <View>
                <TouchableOpacity onPress={addVideo}>
                    <Text style={styles.text}>{video ? 'Edit' : 'Upload'} Video</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const QuestionScreen = () => {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <TextInput
                editable
                multiline
                scrollEnabled
                maxLength={200}
                placeholder="Enter a question"
                blurOnSubmit={true}
            />
            <UploadImage />
            <UploadVideo />
        </KeyboardAvoidingView>
    );
};

export default QuestionScreen;
