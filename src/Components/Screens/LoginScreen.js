import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';


export default class LoginScreen extends Component {
      static navigationOptions= {
          header: null,
      }

  render() {
    return (
      <View style={styles.container}>
       <StatusBar
          barStyle="light-content"
          backgroundColor="lightgray"
        />
        <View style={styles.imgView}>
          <Image style={{ width: 80, height: 80 }} source={require('../Assets/Images/hangman.jpg')} />
        </View>
        <View style={styles.textInputs}>
          <View style={styles.individualInputs}>
            <TextInput
              style={{ fontSize: 20, fontWeight: 'bold' }}
              placeholder={'Username'}
              placeholderTextColor={'gray'}
            />
          </View>
          <View style={styles.individualInputs}>
            <TextInput
              style={{ fontSize: 20, fontWeight: 'bold' }}
              placeholder={'Password'}
              placeholderTextColor={'gray'}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => false}
          style={{flex: 1}}
        >
          <View style={styles.buttonView}>
            <Text style={styles.loginText}>LOGIN</Text>
          </View>
        </TouchableOpacity>
       
        <View style={styles.socialView}>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
            <View style={styles.socialMediaIcons}>
              <Image style={{ width: 40, height: 40 }} source={require('../Assets/Images/twitter.png')} />
            </View>
          </View>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.socialMediaIcons}>
              <Image style={{ width: 40, height: 40 }} source={require('../Assets/Images/facebook.png')} />
            </View>
          </View>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
            <View style={styles.socialMediaIcons}>
              <Image style={{ width: 40, height: 40 }} source={require('../Assets/Images/google-plus.png')} />
            </View>
          </View>

        </View>

        <View style={styles.noAccount}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CreateAccount')}
          >
            <Text style={styles.noAccountText}>Ainda não tem conta?
              <Text style={{ fontWeight: 'bold' }}>Crie uma agora</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
      height: 680,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
  },

  imgView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textInputs: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },

  individualInputs: {
    borderRadius: 50,
    borderColor: 'lightgray',
    padding: 10,
    width: 345,
    borderWidth: 1,
    margin: 3

  },

  buttonView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    borderRadius: 45,
    backgroundColor: 'orange'
  },

  loginText: {
    fontSize: 20,
    color: '#fff'

  },

  socialView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },

  socialMediaIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 90,
    borderWidth: 1

  },

  noAccount: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2
  },

  noAccountText: {
    fontSize: 17,
  }

});