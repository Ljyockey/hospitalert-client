import reducer from '../reducer';
import {
    deleteHospitalization,
    addNewHosp,
    formToggle,
    updateItem,
    newHospToggle,
    createNewUser,
    getHospitalizations,
    removeUser,
    searchFriends,
    sortFriends,
    userLogin,
    userLogout,
    newSentRequest,
    acceptFriend,
    deleteFriend,
    setProfile
} from '../actions';

describe('addNewHosp reducer', () => {
    it('should return ADD_NEW_HOSP state', () => {
        let state = {
            hospitalizations: [{id: 1}, {id: 2}]
        };
        state = reducer(state, addNewHosp({id: 3}));
        expect(state.hospitalizations.length).toEqual(3);
        expect(state.hospitalizations[2].id).toEqual(3);
    });
});

describe('newHospToggle reducer', () => {
    it('should return NEW_HOSP_TOGGLE state', () => {
        let state = {showNewHosp: false}
        state = reducer(state, newHospToggle());
        expect(state.showNewHosp).toEqual(true);
    });
});

describe('getHospitalizations reducer', () => {
    it('should return GET_HOSPITALIZATIONS state', () => {
        let state = {};
        const hosps = [{id: 1}, {id: 2}];
        state = reducer(state, getHospitalizations(hosps));
        expect(state.hospitalizations.length).toEqual(2);
    });
});

describe('removeUser reducer', () => {
    it('should return REMOVE_USER state', () => {
        let state = {
            isLoggedIn: true,
            currentUser: {
                name: 'foo',
                id: 1
            },
            showNewHosp: true,
            hospitalizations: [{id: 1}],
            friendSearchResults: ['foo', 'bar'],
            pendingFriends: [{id: 1}],
            sentFriends: [{id: 2}],
            activeFriends: [{id: 3}],
            profile: {
                name: 'bar',
                id: 2
            }
        };
        state = reducer(state, removeUser());
        expect(state).toEqual({
        	isLoggedIn: false,
            currentUser: {},
            showNewHosp: false,
            hospitalizations: [],
            friendsSearchResults: [],
            pendingFriends: [],
            sentFriends: [],
            activeFriends: [],
            profile: {}
        });
    });
});

describe('searchFriends reducer', () => {
    it('should return SEARCH_FRIENDS state', () => {
        let state = {};
        const r = [{id: 1}, {id: 2}];
        state = reducer(state, searchFriends(r));
        expect(state.friendsSearchResults).toEqual(r);
    });
});

describe('sortFriends reducer', () => {
    it('should return SORT_FRIENDS state', () => {
        let state = {currentUser: {id: 1}};
        const sort = [{
            id: 1,
            status: 'active'
        },
        {
            id: 2,
            friend_id: 1,
            status: 'pending'
        },
        {
            id: 3,
            user_id: 1,
            status: 'pending'
        }];
        state = reducer(state, sortFriends(sort));
        expect(state.pendingFriends.length).toEqual(1);
        expect(state.sentFriends.length).toEqual(1);
        expect(state.activeFriends.length).toEqual(1);
    });
});

describe('userLogin reducer', () => {
    it('should return USER_LOGIN state', () => {
        let state = {isLoggedIn: false};
        const user = {
            name: 'foo',
            id: 1,
            profilePicture: 'foo-bar'
        };
        state = reducer(state, userLogin(user));
        expect(state.isLoggedIn).toEqual(true);
        expect(state.currentUser).toEqual(user);
    });
});

describe('userLogout reducer', () => {
    it('should return USER_LOGOUT state', () => {
        let state = {
            isLoggedIn: true,
            currentUser: {
                name: 'foo',
                id: 1
            },
            showNewHosp: true,
            hospitalizations: [{id: 1}],
            friendSearchResults: ['foo', 'bar'],
            pendingFriends: [{id: 1}],
            sentFriends: [{id: 2}],
            activeFriends: [{id: 3}],
            profile: {
                name: 'bar',
                id: 2
            }
        };
        state = reducer(state, userLogout());
        expect(state).toEqual({
        	isLoggedIn: false,
            currentUser: {},
            showNewHosp: false,
            hospitalizations: [],
            friendsSearchResults: [],
            pendingFriends: [],
            sentFriends: [],
            activeFriends: [],
            profile: {}
        });
    });
});

describe('newSentRequest reducer', () => {
    it('should return NEW_SENT_REQUEST state', () => {
        let state = {
            sentFriends: [{id: 1}]
        };
        const newSent = [{id: 2}];
        state = reducer(state, newSentRequest(newSent));
        expect(state.sentFriends.length).toEqual(2);
    });
});

describe('acceptFriend reducer', () => {
    it('should describe ACCEPT_FRIEND state', () => {
        let state = {
            pendingFriends: [{id: 1, status: 'pending'}],
            activeFriends: []
        };
        state = reducer(state, acceptFriend(1));
        expect(state.pendingFriends.length).toEqual(0);
        expect(state.activeFriends.length).toEqual(1);
    });
});

describe('deleteFriend reducer', () => {
    it('should return DELETE_FRIEND state', () => {
        let state = {
            pendingFriends: [{id: 1}],
            activeFriends: [{id: 2}]
        };
        state = reducer(state, deleteFriend(1));
        expect(state.pendingFriends.length).toEqual(0);
        state = reducer(state, deleteFriend(2));
        expect(state.activeFriends.length).toEqual(0);
    });
});

describe('setProfile reducer', () => {
    it('should return SET_PROFILE state', () => {
        let state = {};
        state = reducer(state, setProfile(1, 'foo'));
        expect(state.profile.name).toEqual('foo');
        expect(state.profile.id).toEqual(1);
    });
});