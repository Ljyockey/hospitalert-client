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