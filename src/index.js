import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Hospitalert from './components/hospitalert';
import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
	<Provider store={store}>
	<Hospitalert />
	</Provider>, 
	document.getElementById('root'));
// registerServiceWorker();
//delete this