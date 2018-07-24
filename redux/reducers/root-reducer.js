import { combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import ContactReducer from './contact-reducer';
import UserReducer from './reducer-active-user'
import SelectedContact from './reducer-selected-contact'

const rootReducer = combineReducers({
  contacts: ContactReducer,
  loggedUser: UserReducer,
  selectedContact: SelectedContact
});

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

export default store
