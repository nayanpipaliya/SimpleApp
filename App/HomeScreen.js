import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Login from '../src/pages/Login';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
  	const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button 
          onPress={ () => navigate('Chat')}
          title="Chat with Vikas"
        />
              <Login />
      </View>
    );
  }
}
