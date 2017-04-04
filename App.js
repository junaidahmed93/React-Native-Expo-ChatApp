import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';


export default class App extends React.Component {

  componentWillMount() {

    var config = {
      apiKey: "AIzaSyAu16RSTy9BVAsnRy2vvQTmnD7mIsA0Uhk",
      authDomain: "friendlocatorapp.firebaseapp.com",
      databaseURL: "https://friendlocatorapp.firebaseio.com",
      projectId: "firebase-friendlocatorapp",
      storageBucket: "firebase-friendlocatorapp.appspot.com",
      messagingSenderId: "281432094749"
    };
    firebase.initializeApp(config);

  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />   

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
