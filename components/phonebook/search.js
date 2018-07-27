import React, { Component } from 'react';
import _ from 'lodash'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { List, ListItem, Text, Button, Icon, View, Header, Left, Input, Item, Container, Right } from 'native-base';
import GenerateForm from 'react-native-form-builder';
import { selectedContact } from '../../redux/actions/contacts';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = { searchListContacts: [] }
  }

  findContact(keyword) {
    let items = []
    this.props.contacts.forEach((contact) => {
      if(contact.data().name.indexOf(keyword) != -1){
        items.push(contact)
      }
    });

    this.setState({ searchListContacts: items })
  }

  showContact(contact) {
    this.props.selectedContact(contact)
    this.props.navigation.navigate('Show')
  }


  render() {
    return (
      <Container>
        <Header searchBar>
          <Button
            transparent
            onPress={() =>  this.props.navigation.navigate('Home')}>
            <Icon type='Feather' name="arrow-left" />
          </Button>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={(text) => this.findContact(text) } />
          </Item>
        </Header>
        <List dataArray={this.state.searchListContacts}
          renderRow={(contact) =>
            <ListItem key={contact.id} onPress = { () => this.showContact(contact)}>
                <Text>{contact.data().name}</Text>
            </ListItem>
          }>
        </List>
      </Container>
    );
  }
}

const SearchField = [
  {
    type: 'text',
    name: 'search',
    required: true,
    label: 'search',
  }
];

function mapStateToProps(state) {
	return {
    contacts: state.contacts
  }
}

function mapDispathtoProps(dispatch) {
  return bindActionCreators(
    {
      selectedContact: selectedContact,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispathtoProps)(Search)
