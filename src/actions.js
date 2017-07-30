export const DELETE_HOSPITALIZATION = 'DELETE_HOSPITALIZATION';
export const deleteHospitalization = (index) => ({
	type: DELETE_HOSPITALIZATION,
	index
})

export const ADD_NEW_HOSP = 'ADD_NEW_HOSP';
export const addNewHosp = (hosp) => ({
	type: ADD_NEW_HOSP,
	hosp
})

export const FORM_TOGGLE = 'FORM_TOGGLE';
export const formToggle = (index) => ({
	type: FORM_TOGGLE,
	index
})

export const UPDATE_ITEM = 'UPDATE_ITEM';
export const updateItem = (object, index) => ({
	type: UPDATE_ITEM,
	object,
	index
})

export const NEW_HOSP_TOGGLE = 'NEW_HOSP_TOGGLE';
export const newHospToggle = () => ({
	type: NEW_HOSP_TOGGLE
})

export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const createNewUser = (user) => ({
	type: CREATE_NEW_USER,
	user
})

export const GET_HOSPITALIZATIONS = 'GET_HOSPITALIZATIONS';
export const getHospitalizations = (hosps) => ({
	type: GET_HOSPITALIZATIONS,
	hosps
})

export const REMOVE_USER = 'REMOVE_USER';
export const removeUser = () => ({
	type: REMOVE_USER
})

export const SEARCH_FRIENDS = 'SEARCH_FRIENDS';
export const searchFriends = (results, search) => ({
	type: SEARCH_FRIENDS,
	results,
	search
})

export const SORT_FRIENDS = 'SORT_FRIENDS';
export const sortFriends = (friends) => ({
	type: SORT_FRIENDS,
	friends
})

export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = (user) => ({
	type: USER_LOGIN,
	user
})

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = () => ({
	type: USER_LOGOUT
})

export const NEW_SENT_REQUEST = 'NEW_SENT_REQUEST';
export const newSentRequest = (friend) => ({
	type: NEW_SENT_REQUEST,
	friend
})

export const ACCEPT_FRIEND = 'ACCEPT_FRIEND';
export const acceptFriend = (index) => ({
	type: ACCEPT_FRIEND,
	index
})

export const DELETE_FRIEND = 'DELETE_FRIEND';
export const deleteFriend = (index) => ({
	type: DELETE_FRIEND,
	index
})

export const SET_PROFILE = 'SET_PROFILE';
export const setProfile = (id, name) => ({
	type: SET_PROFILE,
	profile: {
		id,
		name
	}
})