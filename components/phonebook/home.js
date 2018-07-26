import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { List, ListItem, Text, Button, Icon, Fab, View, Header, Left, Body, Title, Right } from 'native-base';
import { fetchContacts, selectedContact } from '../../redux/actions/contacts';
import { logOut } from '../../redux/actions/logOut'

class Home extends Component {

  logOutFirebase() {
    this.props.logOut()
    this.props.navigation.navigate('Login', {logOut: true})
  }

  getContacts(userId) {
      this.props.fetchContacts(userId)
  }

  showContact(contact) {
    this.props.selectedContact(contact)
    this.props.navigation.navigate('Show')
  }

  renderContacts () {
    let items = []
    this.props.contacts.forEach((contact) => {
      items.push(
        <ListItem key={contact.id} onPress = { () => this.showContact(contact.data())}>
          <Text>{contact.data().name}</Text>
        </ListItem>
      )
    });

    return items
  }

  render() {
    if (this.props.loggedUser)
      this.getContacts(this.props.loggedUser.user.uid)

    return (
      <View style={{ flex: 1 }}>
        <Header>
          <Left />
          <Body>
            <Title>Contacts</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.logOutFirebase()}>
              <Icon type='Feather' name="log-out" />
            </Button>
          </Right>
        </Header>
        <List>
          {this.renderContacts()}
        </List>
        <Fab
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('Create')}>
          <Icon type="Feather" name="plus" />
        </Fab>
      </View>
    );
  }
}

function mapStateToProps(state) {
	return {
    contacts: state.contacts,
    loggedUser: state.loggedUser
  }
}

function mapDispathtoProps(dispatch) {
  return bindActionCreators(
    {
      fetchContacts: fetchContacts,
      selectedContact: selectedContact,
      logOut: logOut
    }, dispatch)
}


export default connect(mapStateToProps, mapDispathtoProps)(Home)
