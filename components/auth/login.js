import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button, Header, Body, Title } from 'native-base';
import GenerateForm from 'react-native-form-builder';

import { SignIn } from '../../redux/actions/users'
import fields from './fields'
import Navbar from '../layout/header'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = { validation: '' }
  }

  loginFirebase() {
    this.props.signIn(this.formGenerator.getValues())
  }

  NavigateToHome () {
    this.props.navigation.navigate('Home')
  }

  showValition() {
    this.setState({validation : 'Credenciales Incorrectas'})
  }

  setDefaultForm() {
    this.formGenerator.setToDefault(['email', 'password'])
  }

  componentDidUpdate(prevProps) {
    if (this.props.loggedUser !== prevProps.loggedUser) {
      if(this.props.loggedUser && 'user' in this.props.loggedUser)
        this.NavigateToHome()
      else if(this.props.loggedUser && 'validation' in this.props.loggedUser)
        this.showValition()
      else{
        this.setDefaultForm()
        this.setState({validation : ''})
      }
    }
  }

  render() {
    return (
      <View >
        { Navbar('Login') }
        <GenerateForm
          ref = {c => { this.formGenerator = c }}
          fields = {fields}
        />
        <Text>{this.state.validation}</Text>
        <Button block onPress={() => this.loginFirebase() }>
          <Text>Login</Text>
        </Button>
        <Button transparent onPress={ () => this.props.navigation.navigate('Register') }>
          <Text>Register</Text>
        </Button>
      </View>
    );
  }
}

function mapStateToProps(state) {
	return {
    loggedUser: state.loggedUser
  }
}

function mapDispathtoProps(dispatch) {
  return bindActionCreators({ signIn: SignIn }, dispatch)
}

export default connect(mapStateToProps, mapDispathtoProps)(Login);
