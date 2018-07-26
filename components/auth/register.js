import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button, Header, Left, Body, Title, Icon, Right } from 'native-base';
import GenerateForm from 'react-native-form-builder';

import { RegisterUser } from '../../redux/actions/register'
import fields from './fields'

class Register extends Component {

  RegisterUserFirebase() {
    this.props.register(this.formGenerator.getValues())
  }

  NavigateToHome () {
    this.props.navigation.navigate('Home')
  }

  componentDidUpdate(prevProps) {
    if (this.props.loggedUser !== prevProps.loggedUser) {
      if(this.props.loggedUser && 'user' in this.props.loggedUser)
        this.NavigateToHome()
    }
  }

  render() {
    return (
      <View>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}>
              <Icon type='Feather' name="arrow-left" />
            </Button>
          </Left>
          <Body>
            <Title>Register</Title>
          </Body>
          <Right />
        </Header>
        <GenerateForm
          ref = {c => { this.formGenerator = c }}
          fields = {fields}
        />
        <Button block onPress={() => this.RegisterUserFirebase() }>
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
  return bindActionCreators(
    {
      register: RegisterUser
    }, dispatch
  )
}

export default connect(mapStateToProps, mapDispathtoProps)(Register);
