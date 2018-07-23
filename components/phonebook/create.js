import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'native-base';
import GenerateForm from 'react-native-form-builder';

const fields = [
  {
    type: 'text',
    name: 'name',
    required: true,
    icon: 'ios-person',
    label: 'Name',
  },
  {
    type: 'number',
    name: 'phone-number',
    icon: 'ios-phone-portrait',
    required: true,
    label: 'Number',
  },
];


class CreatePhoneNumber extends Component {
  render() {
    return (
      <View  style={{paddingTop: 22}} >

          <GenerateForm
            ref={(c) => {
              this.formGenerator = c;
            }}
            fields={fields}
          />
          <Button block >
            <Text>Save</Text>
          </Button>
      </View>
    );
  }
}

export default connect(null)(CreatePhoneNumber);
