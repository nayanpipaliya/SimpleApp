import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ChatScreen extends Component {
	static navigationOption = {
		title: 'Chat with Nayan',
	};
	render() {
		return (
			<View>
				<Text> Chat with Divs </Text>
			</View>
		);
	}
}