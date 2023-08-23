import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { Box, Button, Input, Text } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import logo from './assets/logo.png';

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <LinearGradient
      colors={['#1a1a1a', '#210606']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Image source={logo} style={styles.logo} />
      <View style={styles.form}>
        <Input
          placeholder="Name"
          value={name}
          placeholderTextColor="white"
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <Input
          placeholder="Email"
          value={email}
          placeholderTextColor="white"
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <Button
          onPress={handleSubmit}
          style={styles.button}
          colorScheme="danger"
        >
          Submit
        </Button>
        <Button onPress={() => console.log("Button pressed")}>Press Me</Button>
      </View>
    </LinearGradient>
  );
};

export default Login;
// ...rest of your styles and exports

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
    
  },

  logo: {
    marginTop: '50%',
    marginBottom: '20%',
    alignSelf: 'center',
    height: '18%',
    aspectRatio: 1, 
  },

  form: {
    marginHorizontal: 40
  },

  input: {
    width: "100%",
    color: "white",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    textAlign: "left",
  },

  button: {
    backgroundColor: "#c83f3f",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 80,
    marginTop: 40,
    marginBottom: 80
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
