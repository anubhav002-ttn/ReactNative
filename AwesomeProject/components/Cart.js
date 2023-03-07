import React, { useEffect } from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import CartList from './CartList';
import { addition, subtraction } from '../Redux/Action/Counter';
import { Connect } from 'react-redux';

function Cart() {        
    const myState = useSelector(state => state.counterReducer)
    console.log('haan',myState)  
    
    const dispatch = useDispatch();
    return (
        <View style={{flex:2}}>
        <View>
            {
                myState.map((item, index) => {
                    return (
                        <CartList
                            key={index}
                            id={item.id}
                            dispatch={dispatch}
                            myState={item.count}
                            image={item.image}
                            name={item.name}
                            Price={item.Price}
                            addition={addition}
                            subtraction={subtraction}
                        />
                     );
                })} 
        </View>
        <View style={{flex:1, borderWidth:1, borderRadius:10, margin:20} }>


        </View>
        </View>
    )
}



export default Cart