import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {getUsers} from '../api/API';
import UserComponent from './UserComponent';

const UsersComponent = (props) => {
	const {navigation} = props;
	let [users, setUsers] = useState([]);


	useEffect(() => {
		async function fetchData() {
			let users = await getUsers();
			setUsers([...users]);
		}

		fetchData();
	}, []);

	return <View>
		<FlatList data={users}
				  renderItem={({item}) => {return <UserComponent nav={navigation} item={item}/>;}}
				  keyExtractor={item => '' + item.id}

		/>
	</View>;
};
export default UsersComponent;

let styles = StyleSheet.create({});
