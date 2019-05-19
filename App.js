import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Index from './src/Components/Screens/Index';
import reducers from './src/reducers'

export default class App extends Component {

  componentWillMount(){

    var firebaseConfig = {
      apiKey: "AIzaSyAwyJ1cFtaO4GOeGZaweZd8jopLc0OfOf0",
      authDomain: "hangman-74391.firebaseapp.com",
      databaseURL: "https://hangman-74391.firebaseio.com",
      projectId: "hangman-74391",
      storageBucket: "hangman-74391.appspot.com",
      messagingSenderId: "711530672813",
      appId: "1:711530672813:web:9b5e7088aa162119"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }

  render() {
    return (
      <Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) }>
        <Index />
      </Provider>
    );
  }
}
