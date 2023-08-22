
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Name:", name);
    console.log("Email:", email);
  };


  return (
    <View style={styles.container}>
    <View>
      <Text style={{ marginBottom: 50 , textAlign: "center"}}>Form Example</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
    </View>
    <View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  </View>
    
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0, // Add your desired padding value here
    borderWidth: 5,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 50,
    marginBottom: 10,
    textAlign: "left",
  },
  button: {
    backgroundColor: "#c83f3f",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 90,
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});


