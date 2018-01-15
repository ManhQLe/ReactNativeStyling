import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'
import styled from 'styled-components/native'

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
			<CenterView>
				<WelcomeText>Hello</WelcomeText>
				<WelcomeButton onPress={()=>alert('Hey you')}>
					<WelcomeText>Push ME</WelcomeText>
				</WelcomeButton>
			</CenterView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		flexDirection: "row",
		padding: 20
	},
	box: {
		height: 50,
		width: 50,
		margin: 5,
		backgroundColor: '#e76e63'
	}
})

export default FlexboxExamples;