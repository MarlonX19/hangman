import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from '../../actions/AutenticacaoAction';


class CreateAccountScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''

    }
  }


  _signUp = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( response => {
      Alert.alert("Conta criada com sucesso!")
    })
    .catch( error => {
     alert(error.code);
      alert(error.message);
    
    });
  }

  _cadastraUsuario(){
    const nome = this.props.nome;
    const email = this.props.email;
    const senha = this.props.senha;

    this.props.cadastraUsuario({ nome, email, senha })
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="lightgray"
        />
        <View style={styles.top}>
          <Text style={styles.topText}>Crie uma conta</Text>
        </View>

        <View style={styles.textInputs}>
          <View style={styles.individualInputs}>
            <TextInput
              style={{ fontSize: 20, fontWeight: 'bold' }}
              placeholder={'Name'}
              placeholderTextColor={'gray'}
              onChangeText={(text) => this.props.modificaNome(text) }
              value={this.props.nome}
            />
          </View>
          <View style={styles.individualInputs}>
            <TextInput
              style={{ fontSize: 20, fontWeight: 'bold' }}
              placeholder={'E-mail'}
              placeholderTextColor={'gray'}
              onChangeText={(text) => this.props.modificaEmail(text) }
              value={this.props.email}
            />
          </View>
          <View style={styles.individualInputs}>
            <TextInput
              style={{ fontSize: 20, fontWeight: 'bold' }}
              placeholder={'Password'}
              placeholderTextColor={'gray'}
              onChangeText={(text) => this.props.modificaSenha(text) }
              secureTextEntry
              value={this.props.senha}
            />
          </View>
          <View style={styles.individualInputs}>
            <TextInput
              style={{ fontSize: 20, fontWeight: 'bold' }}
              placeholder={'Confirm Password'}
              placeholderTextColor={'gray'}
              onChangeText={(text) => this.props.modificaSenha(text) }
              secureTextEntry
              value={this.props.senha}
            />
          </View>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
          onPress={() => this._cadastraUsuario()}
          style={{ flex: 1 }}
          >
          <View style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={{ flex: 1 }}
          >
            <Text style={styles.bottomText}>Already have an account?
              <Text style={{ fontWeight: 'bold' }}>Sign in now</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,

  }
);


export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome, cadastraUsuario })(CreateAccountScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'

  },

  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  topText: {
    fontSize: 25,
    fontWeight: 'bold'
  },

  textInputs: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'

  },

  individualInputs: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 50,
    padding: 10,
    margin: 3,
    width: 350

  },

  buttonView:{
    flex: 0.5,
    width: 350,
    borderRadius: 50,
    backgroundColor: 'orange',
    padding: 5,
    margin: 3

  },

  button: {
    flex: 1,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center'

  },

  buttonText: {
    fontSize: 22,
    color: '#fff'
  },

  bottom: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'

  },

  bottomText: {
    fontSize: 17

  }

});