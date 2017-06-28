import * as actions from './actions';

const initialState = {
	isLoggedIn: true,
	mockDb: [	{
		id: 1,
		patient: "Grandpa Joe",
		condition: "heart attack",
		conscious: true,
		latestUpdate: "Waiting to meet with doctor for results of EKG"
		},
		{
		id: 2,
		patient: "Mom",
		condition: "car accident",
		conscious: true,
		latestUpdate: "X-Ray confrimed broken leg. Waiting for cast. Should be released soon."
		},
		{
		id: 3,
		patient: "Ricky",
		condition: "seizure",
		conscious: true,
		latestUpdate: "Ricky was just taken to another room for an MRI"
		},
		{
		id: 4,
		patient: "Sally",
		condition: "hip surgery",
		conscious: false,
		latestUpdate: "Doctor says surgery was a success and that Sally should be waking up any minute now"
	}]
};

export const hospReducer = (state=initialState, action) => {
	return state;
}