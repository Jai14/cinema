import React from "react";
import {
  StatusBar
} from "react-native";
import { registerRootComponent } from 'expo';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; // Import createStackNavigator
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Import SafeAreaProvider
import { enableScreens } from 'react-native-screens'; // Import enableScreens
import Login  from "./Login"; // Import the Login component
import {NativeBaseProvider} from 'native-base';

enableScreens(); 
// Create a Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider >
    <NavigationContainer>
        <StatusBar barStyle="default" /> 
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login } 
             options={{
              headerShown: false, // Hide the header
            }}
        />
        </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

registerRootComponent(App);
