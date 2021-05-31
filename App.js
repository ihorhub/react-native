import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PostDrawer from './src/components/PostDrawer';
import CameraComponent from './src/components/CameraComponent';
import UsersComponent from './src/components/UsersComponent';
 import PostsComponent from './src/components/PostsComponent';
// import UserDetailsComponent from './src/components/UserDetailsComponent';

const BottomTabNavigator= createBottomTabNavigator
// const Stack = createStackNavigator();

export default function App() {

  return (
//     <NavigationContainer>
//           <Stack.Navigator>
//   <Stack.Screen name="'Users'" component={UsersComponent} />
//   <Stack.Screen name="'Posts'" component={PostsComponent} />
//   <Stack.Screen name="'UserDetail'" component={UserDetailsComponent} />
// </Stack.Navigator>
//     </NavigationContainer>
<NavigationContainer>
<BottomTabNavigator.Navigator
  tabBarOptions={{tabStyle: {justifyContent: 'center', alignItems: 'center'}}}>
  <BottomTabNavigator.Screen name={'users'} component={UsersComponent}/>
   <BottomTabNavigator.Screen name={'posts'} component={PostDrawer}/>
  <BottomTabNavigator.Screen name={'camera'} component={CameraComponent} options={{unmountOnBlur: true}}/> // для того щоб працювала камера при переходах

</BottomTabNavigator.Navigator>

</NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',

//   },
//   text:{
//     fontSize:30
//   }
// });
