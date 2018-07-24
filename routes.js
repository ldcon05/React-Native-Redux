import { createStackNavigator } from 'react-navigation';

import Login from './components/auth/login'
import Register from './components/auth/register'
import Home from './components/phonebook/home'
import CreatePhoneNumber from './components/phonebook/create'
import ShowContact from './components/phonebook/show'

export default createStackNavigator(
  {
    Login : {
      screen: Login,
      navigationOptions: {
        title: 'Login',
      }
    },
    Register : {
      screen: Register,
      navigationOptions: {
        title: 'Register'
      }
    },
    Home : {
      screen: Home,
      navigationOptions: {
        title: 'Contacts',
        headerLeft: null
      }
    },
    Create : {
      screen: CreatePhoneNumber,
      navigationOptions: {
        title: 'Create Contacts',
      },
    },
    Show : {
      screen: ShowContact,
      navigationOptions: {
        title: 'Contact',
      },
    }
  },
  { initialRouteName: 'Login' }
);
