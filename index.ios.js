/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

import HomeScreen from './App/HomeScreen';

import ChatScreen from './App/ChatScreen';

import Login from './src/pages/Login';



// import Login from './App/Login';

// class RecentChatsScreen extends React.Component {
//   render() {
//     return <Text>List of recent chats</Text>
//   }
// }

// class AllContactsScreen extends React.Component {
//   render() {
//     return <Text>List of all contacts</Text>
//   }
// }

// const MainScreenNavigator = TabNavigator({});

class CheckScreen extends Component {
  static navigationOption = {
    title: 'Chat with Divs',
  };
  render() {
    return (
      <View>
        <Text> Chat with Divs </Text>
      </View>
    );
  }
}

// class ChatScreen extends Component {
//   static navigationOption = {
//     title: 'Chat with Nayan',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View>
//         <Text> Chat with Nayan </Text>
//         <Button 
//           onPress={ () => navigate('Check')}
//           title="Chat with Divs"
//         />
//       </View>
//     );
//   }
// }

// class HomeScreen extends Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };

//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View>
//         <Text>Hello, Navigation!</Text>
//         <Button 
//           onPress={ () => navigate('Chat')}
//           title="Chat with Vikas"
//         />
//       </View>
//     );
//   }
// }

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Check: { screen: CheckScreen }
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
