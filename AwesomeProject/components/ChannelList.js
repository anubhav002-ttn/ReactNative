import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux';
import { getChannel } from '../ChannelRedux/Action/action';

function ChannelList() {

    const {Channel} = useSelector(state => state.channelReducer);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getChannel());
  useEffect(() => {
      fetchMovies()
    }, []);
    console.log('channel',Channel)

  return (

    <View style={styles.container}>
        <View style={styles.discription}>

        </View>
        <View style={{flex:7}} >
          <ScrollView vertical>
            <FlatList 
                    data={[  
                        {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                        {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C+'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                        {key: 'Prl'},{key: 'Sp'},{key: 'Pyton'},  
                        {key: 'Ajx'}, {key: 'C++'},{key: 'Rby'},  
                        {key: 'Rais'},{key: 'Net'},{key: 'Perl'}  
                    ]}  
                    renderItem={({item}) =>  
                        <Text style={styles.item}>{item.key}</Text>}    
                />
          </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    }, 
    discription:{
        flex:3,
        borderWidth:1,
        borderRadius:12,
        margin:10,
        padding: 10,
    },
    item: {  
        margin:10,
        padding: 10,  
        fontSize: 18,  
        height: 44, 
        borderRadius:12,
        backgroundColor: 'gray' 
    },  
})

export default ChannelList