import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import CartList from './CartList';

const fruits = [
    {
        id: 1,
        name: 'Orange',
        Price: '2.5',
        image:  require('../assets/Images/orange.webp')
    },
    {
        id: 2,
        name: 'Apple',
        Price: '3',
        image:  require('../assets/Images/apple.jpg')
    },
    {
        id: 3,
        name: 'Strawberry',
        Price: '3',
        image: require('../assets/Images/strawberry.jpg')
    }
]

function Cart() {
    const dispatch = useDispatch();
    const myState = useSelector(state => state.counterReducer)
    console.log('haan',myState)
    return (
        <View style={{flex:2}}>
        <View>
            {
                myState.map((item, index) => {
                    return (
                        <CartList
                            id={item.id}
                            dispatch={dispatch}
                            myState={item.count}
                            image={item.image}
                            name={item.name}
                            Price={item.Price}
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