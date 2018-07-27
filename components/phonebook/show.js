import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Container, Content, Text, Button, Header, Left, Icon, Body, Title, Right, Thumbnail } from 'native-base';

import { deleteContact } from '../../redux/actions/contacts'
import Navbar from '../layout/header'

class ShowContact extends Component {

  removeContact() {
    this.props.deleteContact(this.props.selectedContact.id)
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <Container>
        { Navbar('Information', this.props.navigation) }
        <Content padder>
          <View style={{ flex: 1, flexDirection : 'row' , justifyContent: 'center', marginVertical: 25 }}>
            <Thumbnail style={{width: 125, height: 125, }} source={{uri: 'https://vignette.wikia.nocookie.net/dark/images/e/e9/Profilregeln.png/revision/latest?cb=20180106171009&path-prefix=de'}} />
          </View>
          <View style={{ flex: 1, flexDirection: 'row' , marginBottom: 15, justifyContent: 'center' }}>
            <Text style={{ fontSize:20, fontWeight:'bold' }}>Name: </Text>
            <Text style={{fontSize: 20 }}>{this.props.selectedContact.data().name}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' , marginBottom: 35, justifyContent: 'center' }}>
            <Text style={{ fontSize:20, fontWeight:'bold' }}>Phone Number: </Text>
            <Text style={{fontSize: 20 }}>{this.props.selectedContact.data().number}</Text>
          </View>
          <Button block danger onPress={ () => this.removeContact() }>
            <Text>Drop Contact</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

function mapDispathtoProps(dispatch) {
  return bindActionCreators({ deleteContact: deleteContact }, dispatch)
}


function mapStateToProps(state) {
	return {
    selectedContact: state.selectedContact
  }
}

export default connect(mapStateToProps, mapDispathtoProps)(ShowContact);
