import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'native-base';
import GenerateForm from 'react-native-form-builder';

const fields = [
  {
    type: 'email',
    name: 'email',
    required: true,
    icon: 'ios-person',
    label: 'Email',
  },
  {
    type: 'password',
    name: 'password',
    icon: 'ios-lock',
    required: true,
    label: 'Password',
  },
];

class Register extends Component {
  render() {
    return (
      <View  style={{paddingTop: 22}} >

          <GenerateForm
            ref={(c) => {
              this.formGenerator = c;
            }}
            fields={fields}
          />
          <Button block>
            <Text>Register</Text>
          </Button>
      </View>
    );
  }
}

export default connect(null)(Register);
