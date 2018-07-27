import React, { Component } from 'react';
import Expo, { Font } from 'expo';
import { Provider } from 'react-redux';

import RouterOutlet from './routes'
import store from './redux/reducers/root-reducer'
import Spinner from './components/layout/spinner'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { fontLoaded: false }
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ fontLoaded: true })
  }

  render() {
    if (!this.state.fontLoaded)
      return Spinner() 

    return (
      <Provider store={ store }>
        <RouterOutlet />
      </Provider>
    );
  }
}

