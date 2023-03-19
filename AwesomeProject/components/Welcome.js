import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Animated,Text, View } from 'react-native';

const Welcome = () => {
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  useEffect(()=>{
      handleAnimation()
  })

  const handleAnimation = () => {
    console.log('he')
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 1000,
    }).start()
  };


  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1800deg'],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
    fontSize: 30,
    fontWeight:'bold'
  };

  return (
    <View style={{flex:1,justifyContent:'center', alignItems:'center' }}>
      <Animated.Text style={animatedStyle}>WELCOME</Animated.Text>
    </View>
  );
};

export default Welcome;