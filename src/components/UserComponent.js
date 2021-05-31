import React from 'react'
import { View, Text } from 'react-native'
import {StyleSheet}from 'react-native'
import { Button } from 'react-native'

const UserComponent = (props)=> {
    const {item,navigation} = props
    
    return (
        <View style={styles.box}>
            <Text>name:{item.name} </Text>
            <Text>username:{item.username} </Text>
            <Button title={'user details'} onPress={()=>{navigation.navigate('UserDetails',{data:item})}} ></Button>
          
        </View>
    )
}
export default  UserComponent;
let styles= StyleSheet.create({
    box:{
        height:100,
        backgroundColor:'silver',
        margin:5

    }
})
