import React from 'react'
import { Button,View, Text,TouchableOpacity } from "react-native";

function Deshboard({data, navigation}) {
  // const onPress = () => navigation.navigate('Login');
   
  return (
    <View>
        <Text>
            Deshboard {data}
        </Text>
        <Button onPress={ () => navigation.navigate('Login')} title="LogOut"/>
    </View>
  )
}

export default Deshboard