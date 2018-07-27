import { createStackNavigator } from 'react-navigation';

import Login from './components/auth/login'
import Register from './components/auth/register'
import Home from './components/phonebook/home'
import CreatePhoneNumber from './components/phonebook/create'
import ShowContact from './components/phonebook/show'
import Search from './components/phonebook/search'
import Update from './components/phonebook/update'


const routeConfigs = {
  Login : {
    screen: Login,
  },
  Register : {
    screen: Register,
  },
  Home : {
    screen: Home,
  },
  Create : {
    screen: CreatePhoneNumber,
  },
  Show : {
    screen: ShowContact,
  },
  Search: {
    screen: Search
  },
  Update: {
    screen: Update
  }
}

const StackNavigatorConfig = { initialRouteName: 'Login', headerMode: 'none' }

export default createStackNavigator(routeConfigs, StackNavigatorConfig);
