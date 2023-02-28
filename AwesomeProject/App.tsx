import React from "react";
import { Image, TextInput, ImageBackground, View, Text, TouchableOpacity } from "react-native";
import Login from "./components/Login";
import Home from "./components/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDrawer from "./components/MyDrawer";


function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;