import {
    DELETE_HOSPITALIZATION,
    deleteHospitalization,
    ADD_NEW_HOSP,
    addNewHosp,
    FORM_TOGGLE,
    formToggle,
    UPDATE_ITEM,
    updateItem,
    NEW_HOSP_TOGGLE,
    newHospToggle,
    CREATE_NEW_USER,
    createNewUser,
    GET_HOSPITALIZATIONS,
    getHospitalizations,
    REMOVE_USER,
    removeUser,
    SEARCH_FRIENDS,
    searchFriends,
    SORT_FRIENDS,
    sortFriends,
    USER_LOGIN,
    userLogin,
    USER_LOGOUT,
    userLogout,
    NEW_SENT_REQUEST,
    newSentRequest,
    ACCEPT_FRIEND,
    acceptFriend,
    DELETE_FRIEND,
    deleteFriend,
    SET_PROFILE,
    setProfile
} from '../actions';

describe('deleteHospitalization', () => {
    it('should return the action', () =>  {
        const i = 2;
        const action = (deleteHospitalization(i));
        expect(action.type).toEqual(DELETE_HOSPITALIZATION);
        expect(action.index).toEqual(i);
    });
});

describe('addNewHosp', () => {
    it('should return the action', () => {
        const h = {};
        const action = addNewHosp(h);
        expect(action.type).toEqual(ADD_NEW_HOSP);
        expect(action.hosp).toEqual(h);
    });
});

describe('formToggle', () => {
    it('should return the action', () => {
        const i = 8;
        const action = formToggle(i);
        expect(action.type).toEqual(FORM_TOGGLE);
        expect(action.index).toEqual(i);
    });
});

describe('updateItem', () => {
    it('should return the action', () => {
        const o = {};
        const i = 8;
        const action = updateItem(o, i);
        expect(action.type).toEqual(UPDATE_ITEM);
        expect(action.object).toEqual(o);
        expect(action.index).toEqual(i);
    });
});

describe('newHospToggle', () => {
    it('should return the action', () => {
        const action = newHospToggle();
        expect(action.type).toEqual(NEW_HOSP_TOGGLE);
    });
});

describe('createNewUser', () => {
    it('should return the action', () => {
        const u = {};
        const action = createNewUser(u);
        expect(action.type).toEqual(CREATE_NEW_USER);
        expect(action.user).toEqual(u);
    });
});

describe('getHospitalizations', () => {
    it('should return the action', () => {
        const h = [];
        const action = getHospitalizations(h);
        expect(action.type).toEqual(GET_HOSPITALIZATIONS);
        expect(action.hosps).toEqual(h);
    });
});

describe(removeUser, () => {
    it('should return the action', () => {
        const action = removeUser();
        expect(action.type).toEqual(REMOVE_USER);
    });
});

describe('searchFriends', () => {
    it('should return the action', () => {
        const r = [];
        const action = searchFriends(r);
        expect(action.type).toEqual(SEARCH_FRIENDS);
        expect(action.results).toEqual(r);
    });
});

describe('sortFriends', () => {
    it('should return the action', () => {
        const f = [];
        const action = sortFriends(f);
        expect(action.type).toEqual(SORT_FRIENDS);
        expect(action.friends).toEqual(f);
    });
});

describe('userLogin', () => {
    it('should return the action', () => {
        const u = {};
        const action = userLogin(u);
        expect(action.type).toEqual(USER_LOGIN);
        expect(action.user).toEqual(u);
    });
});

describe('userLogout', () => {
    it('should return the action', () => {
        const action = userLogout();
        expect(action.type).toEqual(USER_LOGOUT);
    });
});

describe('newSentRequest', () => {
    it('should return the action', () => {
        const f = {};
        const action = newSentRequest(f);
        expect(action.type).toEqual(NEW_SENT_REQUEST);
        expect(action.friend).toEqual(f);
    });
});

describe('acceptFriend', () => {
    it('should return the action', () => {
        const i = 8;
        const action = acceptFriend(i);
        expect(action.type).toEqual(ACCEPT_FRIEND);
        expect(action.index).toEqual(i);
    });
});

describe('deleteFriend', () => {
    it('should return the action', () => {
        const i = 8;
        const action = deleteFriend(i);
        expect(action.type).toEqual(DELETE_FRIEND);
        expect(action.index).toEqual(i);
    });
});

describe('setProfile', () => {
    it('should return the action', () => {
        const i = 8;
        const n = 'foo';
        const action = setProfile(i, n);
        expect(action.type).toEqual(SET_PROFILE);
        expect(action.profile.id).toEqual(i);
        expect(action.profile.name).toEqual(n);
    });
});