import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from 'react-native';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; // Import createStackNavigator
import login from "./Login"; // Import the Login component

// Create a Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="default" /> 
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
            height: 40 // Set the background color to black
          },
          headerTintColor: "white",
          headerTitleAlign: 'center',
          headerTitleStyle: {   // Set the font style for the header title
            fontSize: 25, // Set the font size
            fontWeight: 'bold', // Set the font weight
          } // Set the text color to white
        }}
      >
        <Stack.Screen name="Login" component={login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '20',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
