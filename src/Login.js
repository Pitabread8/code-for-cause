import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseApp } from "../database/firebaseConfig";

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home.js';

// const LoginScreen = () => {
// }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
    },
    inputView: {
        borderColor: "#ccc",
        borderWidth: 3,
        borderRadius: 30,
        borderStyle: "solid",
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#ccc",
    },
});

const Stack = createNativeStackNavigator();

export default function LoginScreen({navigation}) {
    // return (
    //     <NavigationContainer independent={true}>
    //         <Stack.Navigator initialRouteName="LoginScreen" independent={true}>
    //             <Stack.Screen name="Login" component={LoginScreen} />
    //             <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    //         </Stack.Navigator>
    //     </NavigationContainer>
    // );

    // const navigation = useNavigation();
    const [em, setEmail] = useState("");
    const [pa, setPassword] = useState("");
    // const [n, setName] = useState("");
    // const [r, setRole] = useState("");

    const auth = getAuth(firebaseApp);
    const handleSubmit = (e) => {
        let email = em.toLowerCase().trim();
        let password = pa;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });

        // updateProfile(auth.currentUser, {
        //     displayName: n, role: r
        // }).then(() => {
        //     // Profile updated!
        //     // ...
        // }).catch((error) => {
        //     // An error occurred
        //     // ...
        // });

        // const navigation = useNavigation();
        // navigation.navigate("HomeScreen");
        navigation.navigate('HomeScreen')
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            {/* <Image style={styles.image} source={require("./assets/icon.png")} /> */}
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(em) => setEmail(em)}
                    blurOnSubmit={true}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(pa) => setPassword(pa)}
                    blurOnSubmit={true}
                />
            </View>
            {/* <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Display Name"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(n) => setName(n)}
                    blurOnSubmit={true}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Role"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(r) => setRole(r)}
                    blurOnSubmit={true}
                />
            </View> */}
            <View style={styles.loginBtn}>
                <Button title={"LOG IN"} onPress={handleSubmit} />
            </View>
        </KeyboardAvoidingView>
    );
}





// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView } from "react-native";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { firebaseApp } from "../database/firebaseConfig";

// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './Home.js';

// function LoginScreen() {
//     const [em, setEmail] = useState("");
//     const [pa, setPassword] = useState("");

//     const auth = getAuth(firebaseApp);
//     const handleSubmit = (e) => {
//         let email = em.toLowerCase().trim();
//         let password = pa;
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed up 
//                 const user = userCredential.user;
//                 // ...
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log(errorCode, errorMessage)
//                 // ..
//             });
//         const navigation = useNavigation();
//         navigation.navigate("HomeScreen");
//     }

//     return (
//         <KeyboardAvoidingView behavior="padding" style={styles.container}>
//             {/* <Image style={styles.image} source={require("./assets/icon.png")} /> */}
//             <StatusBar style="auto" />
//             <View style={styles.inputView}>
//                 <TextInput
//                     style={styles.TextInput}
//                     placeholder="Email"
//                     placeholderTextColor="#003f5c"
//                     onChangeText={(em) => setEmail(em)}
//                     blurOnSubmit={true}
//                 />
//             </View>
//             <View style={styles.inputView}>
//                 <TextInput
//                     style={styles.TextInput}
//                     placeholder="Password"
//                     placeholderTextColor="#003f5c"
//                     secureTextEntry={true}
//                     onChangeText={(pa) => setPassword(pa)}
//                     blurOnSubmit={true}
//                 />
//             </View>
//             <View style={styles.loginBtn}>
//                 <Button title={"LOG IN"} onPress={handleSubmit} />
//             </View>
//         </KeyboardAvoidingView>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     image: {
//         marginBottom: 40,
//     },
//     inputView: {
//         borderColor: "#ccc",
//         borderWidth: 3,
//         borderRadius: 30,
//         borderStyle: "solid",
//         width: "70%",
//         height: 45,
//         marginBottom: 20,
//         alignItems: "center",
//     },
//     TextInput: {
//         height: 50,
//         flex: 1,
//         padding: 10,
//         marginLeft: 20,
//     },
//     forgot_button: {
//         height: 30,
//         marginBottom: 30,
//     },
//     loginBtn: {
//         width: "80%",
//         borderRadius: 25,
//         height: 50,
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 40,
//         backgroundColor: "#ccc",
//     },
// });

// const Stack = createNativeStackNavigator();

// export default function App() {
//     return (
//         <NavigationContainer independent={true}>
//             <Stack.Navigator initialRouteName="LoginScreen" independent={true}>
//                 <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
//                 <Stack.Screen name="Login" component={LoginScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
