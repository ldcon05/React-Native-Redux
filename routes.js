import { createStackNavigator } from 'react-navigation';

import Login from './components/auth/login'
import Register from './components/auth/register'
import Home from './components/phonebook/home'
import CreatePhoneNumber from './components/phonebook/create'

export default createStackNavigator(
  {
    Login,
    Register,
    Home,
    Create: CreatePhoneNumber
  },
  {
    initialRouteName: 'Login'
  }
);
