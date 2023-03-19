import React from 'react'
import { Image, TextInput, ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Deshboard from './Deshboard';
import Cart from './Cart';
import ChannelList from './ChannelList';
import Welcome from './Welcome';


const Drawer = createDrawerNavigator();

const MyDrawer = ({ route, navigation }) => {
  const name = route.params.name
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Deshboard"
      component={() => <Deshboard 
      data={name} navigation={navigation} />} ></Drawer.Screen>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name='Cart' component={Cart} />
      <Drawer.Screen name='ChannelList'
        component={ChannelList}
        options={{ headerShown: false }} />
      <Drawer.Screen name='Welcome' component={Welcome} /> 
    </Drawer.Navigator>
  )
}

export default MyDrawer