import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'
import styled from 'styled-components/native'

import {FontAwesome, Ionicons}  from '@expo/vector-icons'
import {TabNavigator,StackNavigator, DrawerNavigator} from 'react-navigation'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row"
	},
	box: {
		height: 50,
		width: 50,
		margin: 5,
		backgroundColor: '#e76e63'
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
				<Tabs/>
			</View>
		)
	}
}

export default FlexboxExamples;