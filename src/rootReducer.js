import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { data } from './components/dataReducers';

const reducer = combineReducers({
  data,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
