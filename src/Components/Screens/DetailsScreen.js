import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View} from 'react-native';


export default class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details Screen',
  };


  render() {

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
