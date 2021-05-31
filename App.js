import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getUsers } from './src/api/API';

export default function App() {
  const [users, setUsers] = useState([])
console.log(users)

  async function fetchData() {
    
    let users=await getUsers()
    setUsers([...users])
    
  }
  useEffect(() => {
fetchData
    return () => {
     console.log('hello')
    }
  }, [])
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text:{
    fontSize:30
  }
});
