import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <ImageBackground source={require('../Assets/Images/bg.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <View style={styles.mainViews}>
            <TouchableOpacity
            onPress={() => false}
            style={{ backgroundColor: 'green', borderRadius: 15, padding: 10 }}
            >   
              <View style={styles.innerViews}>
                <Image style={{ width: 50, height: 50 }} source={require('../Assets/Images/start.png')} />
                <Text style={styles.buttonText}>Start game</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.mainViews}>
          <TouchableOpacity
            onPress={() => false}
            style={{ backgroundColor: 'blue', borderRadius: 15, padding: 10 }}
            >
              <View style={styles.innerViews}>
                <Image style={{ width: 50, height: 50 }} source={require('../Assets/Images/selfScore.png')} />
                <Text style={styles.buttonText}>See my score</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.mainViews}>
          <TouchableOpacity
            onPress={() => false}
            style={{ backgroundColor: 'orange', borderRadius: 15, padding: 10 }}
            >
              <View style={styles.innerViews}>
                <Image style={{ width: 50, height: 50 }} source={require('../Assets/Images/globalScore.jpg')} />
                <Text style={styles.buttonText}>Global Score</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  mainViews: {
    margin: 5,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  innerViews: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },

  buttonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  }

})
