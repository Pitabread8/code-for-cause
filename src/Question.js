import { StyleSheet, Text, View, Button } from 'react-native';

const QuestionScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile!</Text>;
};

export default QuestionScreen;
