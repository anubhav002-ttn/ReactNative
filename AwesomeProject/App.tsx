import React from "react";
import { Image, TextInput, ImageBackground, View, Text,TouchableOpacity } from "react-native";
// import img from "./assets/Images/background.jpg";

function App() {
  const image = { uri: "https://picsum.photos/seed/picsum/200/300" };
  return (
    <View >
      <ImageBackground source={image} style={{ height: 900 }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{ height: 70, width: 70 }}
            source={{ uri: 'https://picsum.photos/id/237/200/300' }}
          />
        </View>
        <View style={{ flex: 2, margin: 60 }}>
          <Text style={{ fontWeight: 'bold', color: 'red' }}>
            USERNAME
          </Text>
          <TextInput style={{
            height: 40, borderBottomColor: '#ed42a6',
            borderBottomWidth: 1
          }} />
          <Text style={{ fontWeight: 'bold', color: 'red', marginTop: 10 }}>
            PASSWORD
          </Text>
          <TextInput style={{
            height: 40, borderBottomColor: '#ed42a6',
            borderBottomWidth: 1
          }} />
          <Text style={{ fontWeight: 'bold', alignSelf: "flex-end", marginTop: 5 }}>
            Forget Password?
          </Text>
        <TouchableOpacity style={{alignItems: 'center',backgroundColor: '#fff',padding: 10, borderRadius:20, margin:5}}>
        <Text style={{fontWeight: 'bold', color: 'red'}}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', color: 'red', margin: 10, alignSelf: "center" }}>
            ------------ OR CONNECT WITH --------------
          </Text>
        <View style={{flexDirection:'row', justifyContent:"space-evenly"}}>
        <TouchableOpacity style={{alignItems: 'center',backgroundColor: 'blue',padding: 10, borderRadius:20, margin:5, width:130}}>
        <Text style={{fontWeight: 'bold', color: '#fff'}}>FaceBook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center',backgroundColor: 'red',padding: 10, borderRadius:20, margin:5,  width:130}}>
        <Text style={{fontWeight: 'bold', color: '#fff'}}>Google</Text>
        </TouchableOpacity>

        </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default App;