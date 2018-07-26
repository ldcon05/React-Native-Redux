import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Header, Button, Icon, Left, Right, Body, Title } from 'native-base';

import Navbar from '../layout/header'

class ShowContact extends Component {

  render() {
    return (
      <View>
        { Navbar('Register', this.props.navigation) }
        <Text style={{fontSize: 40 }}>Contact Info</Text>
        <Text style={{fontSize: 20, marginTop: 30, marginBottom:10 }}>Name: {this.props.selectedContact.name}</Text>
        <Text style={{fontSize: 20 }}>Tel: {this.props.selectedContact.number}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
	return {
    selectedContact: state.selectedContact
  }
}

export default connect(mapStateToProps)(ShowContact);
