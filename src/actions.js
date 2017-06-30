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