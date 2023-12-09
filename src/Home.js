import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <Button
            title="Go to Sita's profile"
            onPress={() =>
                navigation.navigate('QuestionScreen', { name: 'Sita' })
            }
        />
    );
};

export default HomeScreen;
