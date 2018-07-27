import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Toast from 'react-native-simple-toast';
import { View, Container, Content, Text, Button, Header, Body, Title } from 'native-base';
import GenerateForm from 'react-native-form-builder';

import { SignIn } from '../../redux/actions/users'
import fields from './fields'
import Navbar from '../layout/header'

class Login extends Component {
  loginFirebase() {
    this.props.signIn(this.formGenerator.getValues())
  }

  NavigateToHome () {
    this.props.navigation.navigate('Home')
  }

  showValition() {
    Toast.show('Wrong Credentials!');
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
      }
    }
  }

  render() {
    return (
      <Container>
        { Navbar('Login') }
        <Content padder>
          <GenerateForm
            ref = {c => { this.formGenerator = c }}
            fields = {fields}
          />
          
          <Button block onPress={() => this.loginFirebase() }>
            <Text>Login</Text>
          </Button>
          <View style={{ flex: 1, flexDirection : 'row', justifyContent: 'center', marginTop: 5, alignItems: 'center' }}>
            <Text style={{ fontSize: 12 }}>You don't have an account?</Text>
            <Button transparent onPress={ () => this.props.navigation.navigate('Register') }>
              <Text style={{ fontSize: 12 }} >Register</Text>
            </Button>
          </View>
        </Content>
      </Container>
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
