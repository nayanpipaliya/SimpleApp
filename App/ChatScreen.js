import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class ChatScreen extends Component {
	static navigationOption = {
		title: 'Chat with Nayan',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text> Chat with Divs </Text>
				<Button 
		          onPress={ () => navigate('Check')}
		          title="Chat with Divs"
		        />
			</View>
		);
	}
}