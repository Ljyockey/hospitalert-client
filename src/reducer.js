const {API_BASE_URL} = require('./config');
const axios = require('axios');


const initialState = {
	isLoggedIn: false,
	currentUser: {},
	showNewHosp: false,
	hospitalizations: [],
	friendsSearchResults: [],
	pendingFriends: [],
	sentFriends: [],
	activeFriends: [],
	profile: {}
};

//reducers
export const hospReducer = (state=initialState, action) => {

	switch(action.type) {

		case 'DELETE_HOSPITALIZATION':
			axios.delete(`${API_BASE_URL}/hospitalizations/${action.index}`);
			const editedDb = state.hospitalizations.filter(function(item) {
				return item.id !== action.index
			})
			state = Object.assign({}, state, {
				hospitalizations: editedDb
			});
			return state;

		case 'ADD_NEW_HOSP':
			state = Object.assign({}, state, {
				hospitalizations: [...state.hospitalizations, action.hosp]
			});
			return state;

		case 'FORM_TOGGLE':
			let newFormBoolean;
			const findItemToToggle = state.hospitalizations.filter(function(item) {
				if (item.id === action.index) {
					newFormBoolean = !item.isAForm;
					item.isAForm = newFormBoolean;
				}
				return item; 
			})
			axios.put(`${API_BASE_URL}/hospitalizations/${action.index}`, {
				id: action.index,
				isAForm: newFormBoolean
			});
			state = Object.assign({}, state, {
				hospitalizations: findItemToToggle
			});
			return state;

		case 'UPDATE_ITEM':
			const objForDb = {id: action.index};
			const possibleUpdates = ['condition', 'conscious', 'latestUpdate'];
			const targetDbItem = state.hospitalizations.filter(function(obj) {
				return obj.id === action.index
			});
			possibleUpdates.forEach(field => {
				if(field in action.object) {
					targetDbItem[0][field] = action.object[field];
					objForDb[field] = action.object[field];
				}
			})
			axios.put(`${API_BASE_URL}/hospitalizations/${action.index}`, objForDb);
			const newDb = state.hospitalizations.filter(function(item) {
				if (item.id === action.index) {
					return targetDbItem;
				}
				else {
					return item;
				}
			});
			state = Object.assign({}, state, {
				hospitalizations: newDb
			})
			return state;

			case 'NEW_HOSP_TOGGLE':
				const newHospToggle = !state.showNewHosp;
				state = Object.assign({}, state, {
					showNewHosp: newHospToggle
				})
				return state;

			case 'CREATE_NEW_USER':
				axios.post(`${API_BASE_URL}/users`, action.user);
				break;

			case 'GET_HOSPITALIZATIONS':
					state = Object.assign({}, state, {
						hospitalizations: action.hosps
					})
					return state;

			case 'REMOVE_USER':
					state = Object.assign({}, initialState);

			case 'SEARCH_FRIENDS':
				state = Object.assign({}, state, {
					friendsSearchResults: action.results
				})
				return state;

			case 'SORT_FRIENDS':
				const myPendingFriends = action.friends.filter((obj) => {
					return (obj.status === 'pending' && obj.friend_id === state.currentUser.id);
				});
				const myActiveFriends = action.friends.filter((obj) => {
					return (obj.status === 'active');
				});
				const mySentFriends = action.friends.filter((obj) =>{
					return (obj.status === 'pending' && obj.user_id === state.currentUser.id);
				})
				state = Object.assign({}, state, {
					pendingFriends: myPendingFriends,
					sentFriends: mySentFriends,
					activeFriends: myActiveFriends
				})
				return state;

			case 'USER_LOGIN':
				state = Object.assign({}, state, {
					currentUser: {
						name: action.user.name,
						id: action.user.id,
						profilePicture: action.user.profilePicture
					},
					isLoggedIn: true
				});
				return state;

			case 'USER_LOGOUT':
				state = Object.assign({}, initialState);
				return state;

			case 'NEW_SENT_REQUEST':
				state = Object.assign({}, state, {
					sentFriends: [...state.sentFriends, action.friend]
				})
				return state;

			case 'ACCEPT_FRIEND':
				const newPending = state.pendingFriends.filter((obj) => {
					return (obj.id !== action.index);
				})
				const newActiveFriend = state.pendingFriends.filter((obj) => {
					return (obj.id === action.index);
				})
				state = Object.assign({}, state, {
					pendingFriends: newPending,
					activeFriends: [...state.activeFriends, newActiveFriend]
				})
				return state;

			case 'DELETE_FRIEND':
				const newPendingFriends = state.pendingFriends.filter((obj) => {
					return (obj.id !== action.index)
				})
				const newActive = state.activeFriends.filter((obj) => {
					return (obj.id !== action.index)
				})
				state = Object.assign({}, state, {
					pendingFriends: newPendingFriends,
					activeFriends: newActive
				})
				return state;

			case 'SET_PROFILE':
				state = Object.assign({}, state, {
					profile: action.profile
				})
				return state;

		default:
			return state;


	}
}