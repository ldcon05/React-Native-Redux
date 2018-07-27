import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Container, Content, Text, Button, Header, Left, Icon, Body, Title, Right, Thumbnail } from 'native-base';
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
      <Container>
        { Navbar('Create Contact', this.props.navigation) }
        <Content padder>
          <View style={{ flex: 1, flexDirection : 'row' , justifyContent: 'center', marginVertical: 15 }}>
            <Thumbnail style={{width: 125, height: 125, }} source={{uri: 'https://vignette.wikia.nocookie.net/dark/images/e/e9/Profilregeln.png/revision/latest?cb=20180106171009&path-prefix=de'}} />
          </View>
          <View style={{ flex: 1, marginBottom: 25 }}>
            <GenerateForm
              ref={(c) => { this.formGenerator = c; }}
              fields={fields}
            />
          </View>
          <Button block onPress={ () => this.createContactInFirebase() }>
            <Text>Save Contact</Text>
          </Button>
        </Content>
      </Container>
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
