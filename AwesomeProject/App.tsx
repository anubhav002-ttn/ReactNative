import React from "react";
import { Image, TextInput, ImageBackground, View, Text, TouchableOpacity } from "react-native";
import Login from "./components/Login";
import Home from "./components/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDrawer from "./components/MyDrawer";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App;