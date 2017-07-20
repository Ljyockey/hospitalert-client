import {createStore} from 'redux';

import {hospReducer} from './reducer';

import {loadState} from './local-storage';

const persistedState = loadState();

export default createStore(hospReducer, persistedState);