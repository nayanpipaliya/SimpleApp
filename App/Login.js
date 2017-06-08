import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    title: 'LOGIN',
  };

  onPressMicrophone = () =>{
        const { navigate } = this.props.navigation;
        navigate('Chat');
    };

  render() {
  	const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>LOOPED.</Text>
        </View>
        <View style={styles.footer}></View>
        <Button 
          onPress={ this.onPressMicrophone }
          title="Chat with Vikas"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex:3,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    color: '#eee',
    fontWeight: 'bold',
    justifyContent: 'flex-top',
    alignItems: 'center'
  },
  footer: {
    flex:1
  }

});