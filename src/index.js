import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Hospitalert from './components/hospitalert';
import store from './store';
import {saveState} from './local-storage';

// import registerServiceWorker from './registerServiceWorker';
import './index.css';

store.subscribe(() => {
	saveState({
		isLoggedIn: store.getState().isLoggedIn,
		currentUser: store.getState().currentUser,
		showNewHosp: store.getState().showNewHosp,
		hospitalizations: store.getState().hospitalizations,
		pendingFriends: store.getState().pendingFriends,
		sentFriends: store.getState().sentFriends,
		activeFriends: store.getState().activeFriends,
		profile: store.getState().profile
	});
});

ReactDOM.render(
	<Provider store={store}>
	<Hospitalert />
	</Provider>, 
	document.getElementById('root'));
// registerServiceWorker();
//delete this