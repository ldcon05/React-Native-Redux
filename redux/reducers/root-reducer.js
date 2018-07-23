import { combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import ContactReducer from './contact-reducer';

const rootReducer = combineReducers({
  contacts: ContactReducer,
});

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

export default store
