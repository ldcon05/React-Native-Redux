import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button, Header, Left, Icon, Body, Title, Right } from 'native-base';
import GenerateForm from 'react-native-form-builder';

import { createContact } from '../../redux/actions/contacts'
import fields from './fields'
import Navbar from '../layout/header'


class CreatePhoneNumber extends Component {
  createContactInFirebase() {
    this.props.createContact(this.formGenerator.getValues(), this.props.loggedUser.user.uid)
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View>
        { Navbar('Register', this.props.navigation) }
        <GenerateForm
          ref={(c) => { this.formGenerator = c; }}
          fields={fields}
        />
        <Button block onPress={ () => this.createContactInFirebase() }>
          <Text>Save</Text>
        </Button>
      </View>
    );
  }
}

function mapDispathtoProps(dispatch) {
  return bindActionCreators({ createContact: createContact }, dispatch)
}

function mapStateToProps(state) {
	return {
    loggedUser: state.loggedUser
  }
}


export default connect(mapStateToProps, mapDispathtoProps)(CreatePhoneNumber);
