import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { List, ListItem, Text, Button, Icon, Fab, View } from 'native-base';
import { fetchContacts, selectedContact } from '../../redux/actions/contacts';

class Home extends Component {

  logOut() {
    this.props.navigation.navigate('Login')
  }


  componentDidMount() {
    if(this.props.loggedUser != null)
      this.props.fetchContacts(this.props.loggedUser.uid)
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
    return (
      <View style={{ flex: 1 }}>
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
      selectedContact: selectedContact
    }, dispatch)
}


export default connect(mapStateToProps, mapDispathtoProps)(Home)
