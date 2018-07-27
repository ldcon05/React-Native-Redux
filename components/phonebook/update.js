import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Container, Content, Text, Button, Header, Left, Icon, Body, Title, Right, Thumbnail } from 'native-base';
import GenerateForm from 'react-native-form-builder';

import { updateContact } from '../../redux/actions/contacts'
import fields from './fields'
import Navbar from '../layout/header'


class UpdatePhoneNumber extends Component {
  updateContactInFirebase() {
    this.props.updateContact(this.props.selectedContact.id, this.formGenerator.getValues())
    this.props.navigation.goBack()
  }

  componentDidMount(){
    this.formGenerator.setValues(
     {
        name: this.props.selectedContact.data().name,
        phoneNumber: this.props.selectedContact.data().number,
     }
    )
  }

  render() {

    return (
      <Container>
        { Navbar('Update Contact', this.props.navigation) }
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
          <Button block onPress={ () => this.updateContactInFirebase() }>
            <Text>Update Contact</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

function mapDispathtoProps(dispatch) {
  return bindActionCreators({ updateContact: updateContact }, dispatch)
}

function mapStateToProps(state) {
	return {
    selectedContact: state.selectedContact
  }
}


export default connect(mapStateToProps, mapDispathtoProps)(UpdatePhoneNumber);
