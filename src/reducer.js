const initialState = {
	isLoggedIn: true,
	showNewHosp: false,
	mockDb: [	{
		patient: "Grandpa Joe",
		condition: "heart attack",
		conscious: true,
		latestUpdate: "Waiting to meet with doctor for results of EKG",
		isAForm: false
		},
		{
		patient: "Mom",
		condition: "car accident",
		conscious: true,
		latestUpdate: "X-Ray confrimed broken leg. Waiting for cast. Should be released soon.",
		isAForm: false
		},
		{
		patient: "Ricky",
		condition: "seizure",
		conscious: true,
		latestUpdate: "Ricky was just taken to another room for an MRI",
		isAForm: false
		},
		{
		patient: "Sally",
		condition: "hip surgery",
		conscious: false,
		latestUpdate: "Doctor says surgery was a success and that Sally should be waking up any minute now",
		isAForm: false
	}]
};

export const hospReducer = (state=initialState, action) => {

	switch(action.type) {

		case 'DELETE_HOSPITALIZATION':
			const editedDb = state.mockDb.filter(function(item, index) {
				return index !== action.index
			})
			state = Object.assign({}, state, {
				mockDb: editedDb
			});
			return state;

		case 'ADD_NEW_HOSP':
			state = Object.assign({}, state, {
				mockDb: [...state.mockDb, action.hosp]
			});
			return state;

		case 'FORM_TOGGLE':
			const findItemToToggle = state.mockDb.filter(function(item, index) {
				if (index === action.index) {
					item.isAForm = !item.isAForm
				}
				return item; 
			})
			state = Object.assign({}, state, {
				mockDb: findItemToToggle
			});
			return state;

		case 'UPDATE_ITEM':
			const possibleUpdates = ['condition', 'conscious', 'latestUpdate'];
			const targetDbItem = state.mockDb[action.index];
			possibleUpdates.forEach(field => {
				if(field in action.object) {
					targetDbItem[field] = action.object[field];
				}
			})
			const newDb = state.mockDb.filter(function(item, index) {
				if (index === action.index) {
					return targetDbItem;
				}
				else {
					return item;
				}
			});
			state = Object.assign({}, state, {
				mockDb: newDb
			})
			return state;

			case 'NEW_HOSP_TOGGLE':
				const newHospToggle = !state.showNewHosp;
				state = Object.assign({}, state, {
					showNewHosp: newHospToggle
				})
				return state;

		default:
			return state;

	}
}