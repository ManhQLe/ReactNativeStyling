import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import {FontAwesome, Ionicons}  from '@expo/vector-icons'
import {TabNavigator,StackNavigator, DrawerNavigator} from 'react-navigation'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor:"#34495e"
	},
	box: {
		height: 50,
		width: 50,
		margin: 5,
		backgroundColor: '#e76e63'
	},
	text:{		
		fontSize:30
	},
	btn:{
		padding:10,
		borderRadius:5,
		backgroundColor:"#e74c3c",	
		justifyContent:"center",
		height:50
	}
})


function Home(){
	return (
		<View style={styles.container}>
			<Text>HOME</Text>
		</View>
	)
}

function Dashboard(){
	return (
		<View style={styles.container}>
			<Text>DASHBOARD</Text>
		</View>
	)
}

function Home2({navigation}){
	return(
		<View style={styles.container}>
			<Text style={styles.text}>HOME VIEW</Text>
			<TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Dashboard')}>
				<Text>To Dashboard</Text>
			</TouchableOpacity>
		</View>
	)
}

const Tabs = TabNavigator({
	Home:{
		screen:Home,
		navigationOptions:{
			tabBarIcon:()=> <FontAwesome name='home' size={30} color='black'/>
		}	
	},
	Dashboard:{
		screen:Dashboard,
		navigationOptions:{
			tabBarIcon:()=> <FontAwesome name='dashboard' size={30} color='black'/>
		}
	}
})

const Stack = StackNavigator({
	Home:{
		screen:Home2,
		navigationOptions:{
			title:"Home"
		}
	},
	Dashboard:{
		screen:Dashboard,
		navigationOptions:{
			title:"Home",
			headerTintColor:"#ecf0f1",
			headerStyle:{
				backgroundColor:"#e67e22"
			}

		}	
	}
})

const CenterView = styled.View`
  	flex:1;
  	align-items:center;
  	justify-content:center;
  	background:#333
`

const WelcomeText = styled.Text`
  	color:white;
  	font-size: 20
`

const WelcomeButton = styled.TouchableOpacity`
	width:100px;
	height:50px;
	background:red;
	border-radius:5px;
	justify-content: center;
	align-items:center;
`

class FlexboxExamples extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Stack/>
			</View>
		)
	}
}

export default FlexboxExamples;