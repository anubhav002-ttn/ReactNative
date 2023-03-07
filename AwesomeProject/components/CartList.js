import React from 'react'
import { Button,View, Text,TouchableOpacity, StyleSheet, Image } from "react-native";
import { addition, subtraction } from '../Redux/Action/Counter';

function CartList(props) {
  const  {myState, dispatch, name ,image, Price, id} =props;
  console.log('hello',myState)
  return (
    <View>
        <View style={[styles.container, styles.shadowProp, styles.counter]}>
                <View style={styles.counter}>
                    <Image
                        style={styles.logo}
                        source={image}
                    />
                    <View style={styles.column}>
                        <Text>{name}</Text>
                        <Text>{Price}$/kg</Text>
                    </View>
                </View>
                <View style={styles.counter}>
                    <TouchableOpacity style={styles.btn} onPress={()=>dispatch(subtraction(id))}>
                        <Text style={styles.tex}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.tex}>{myState}</Text>
                    <TouchableOpacity style={styles.btn}onPress={()=>dispatch(addition(id))}>
                        <Text style={styles.tex}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        margin: 20,
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'space-between'
    },
    column: {
        flexDirection: 'column',
    },
    counter: {
        flexDirection: 'row',
    },
    tex: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    btn: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        borderWidth: 1
    },
    logo: {
        width: 66,
        height: 58,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -5, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});

export default CartList