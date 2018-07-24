import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button } from 'native-base';
import GenerateForm from 'react-native-form-builder';

import { SignIn } from '../../redux/actions/login'
import fields from './fields'

class Login extends Component {

  loginFirebase() {
    this.props.signIn(this.formGenerator.getValues())
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View  style={{paddingTop: 22}} >
        <GenerateForm
          ref = {c => { this.formGenerator = c }}
          fields = {fields}
        />
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

function mapDispathtoProps(dispatch) {
  return bindActionCreators({ signIn: SignIn }, dispatch)
}

export default connect(null, mapDispathtoProps)(Login);
