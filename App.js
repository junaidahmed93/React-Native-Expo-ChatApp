import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './src/components/LoginForm';


export default class App extends React.Component {

  componentWillMount() {

    var config = {
      apiKey: "AIzaSyDug7S02JsjGX29CFRBabcdTnlXBL-yMzQ",
      authDomain: "webpack-92a38.firebaseapp.com",
      databaseURL: "https://webpack-92a38.firebaseio.com",
      projectId: "webpack-92a38",
      storageBucket: "webpack-92a38.appspot.com",
      messagingSenderId: "399018148090"
    };
    firebase.initializeApp(config);

  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
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
