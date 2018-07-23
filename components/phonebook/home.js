import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import { fetchContacts } from '../../redux/actions/contacts';

class Home extends Component {
  componentDidMount() {
  	this.props.fetchContacts()
  }

  renderContacts() {
  	this.props.contacts.forEach((doc) => {
      console.log(doc.data())
    });
  }

  render() {
    return (
      <View style={{flex:1, paddingTop:22}}>
      	{this.renderContacts()}
      </View>
    );
  }
}

function mapStateToProps(state) {
	return {contacts: state.contacts}
}

export default connect(mapStateToProps, { fetchContacts })(Home)
