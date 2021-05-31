import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const UserDetailsComponent=({route,navigation})=> {
 let {params:{data}}=route
// передаємо назву name в  title
 useEffect(()=>{
   navigation.setOptions({title:data.name})
 })

    return (
        <View>
            <Text>email:{data.email}</Text>
            <Text>phone:{data.phone}</Text>
            <Text>website:{data.website}</Text>
            <Text>address:{data.address}</Text>           
        </View>
    )
}
export default UserDetailsComponent;

