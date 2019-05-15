import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home screen',
    headerRight: (
      <Button
        title='Info'
        onPress={() => alert('Apertou here')}
        color='lightgrey'
      />
    )
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Text>Home screen again</Text>
      </View>
    );
  }
}
