import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button } from 'native-base';
import GenerateForm from 'react-native-form-builder';

import { createContact } from '../../redux/actions/contacts'
import fields from './fields'


class CreatePhoneNumber extends Component {
  createContactInFirebase() {
    this.props.createContact(this.formGenerator.getValues(), this.props.loggedUser.uid)
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View  style={{paddingTop: 22}} >
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
