import React from 'react'
import { Image, TextInput, ImageBackground, View, Text,TouchableOpacity } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Deshboard from './Deshboard';


const Drawer = createDrawerNavigator();

const MyDrawer=({route, navigation})=> {
  const name= route.params.name
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Deshboard" component={() => <Deshboard data={name} navigation={navigation}/>} />
    <Drawer.Screen name="Home" component={Home} />
    
  </Drawer.Navigator>
  )
}

export default MyDrawer