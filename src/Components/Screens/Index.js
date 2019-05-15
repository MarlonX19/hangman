import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

export default Index = () => {
  return (
    <AppContainer />
  );
}

const AppNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        Home: HomeScreen,
        CreateAccount: CreateAccountScreen,
        Details: DetailsScreen
    },
    {
      initialRouteName: "Login"
    }
);

const AppContainer = createAppContainer(AppNavigator);