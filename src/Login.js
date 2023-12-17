import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { StyleSheet, View, TextInput, Button, KeyboardAvoidingView } from "react-native";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseApp } from "../database/firebaseConfig";

import SelectDropdown from 'react-native-select-dropdown'

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

export default function LoginScreen({ navigation }) {
    const [em, setEmail] = useState("");
    const [pa, setPassword] = useState("");
    const [n, setName] = useState("");
    const [r, setRole] = useState("");

    const auth = getAuth(firebaseApp);
    const handleSubmit = (e) => {
        let email = em.toLowerCase().trim();
        let password = pa;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

        updateProfile(auth.currentUser, {
            displayName: n, role: r
        }).then(() => {
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

        navigation.navigate('HomeScreen')
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Display Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(n) => setName(n)}
                    blurOnSubmit={true}
                />
            </View>
            <View style={styles.inputView}>

                <SelectDropdown
                    data={["Student", "Teacher", "Tutor"]}
                    onSelect={(r) => {
                        setRole(r)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                />
            </View>
            <View style={styles.loginBtn}>
                <Button title={"LOG IN"} onPress={handleSubmit} />
            </View>
        </KeyboardAvoidingView>
    );
}
