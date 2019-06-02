import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Index from './src/Components/Screens/Index';
import reducers from './src/reducers';
import { firebaseConnection } from './src/Config/ConfigPaths';

export default class App extends Component {

  componentWillMount(){
    // Initialize Firebase
    firebase.initializeApp(firebaseConnection);
  }

  render() {
    return (
      <Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) }>
        <Index />
      </Provider>
    );
  }
}
