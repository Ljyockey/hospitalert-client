import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import reducer from './reducer';

import {loadState} from './local-storage';

const persistedState = loadState();

export default createStore(reducer, persistedState, applyMiddleware(thunk));