import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../store';

import FriendProfile from '../../components/friend-profile';

describe('<FriendProfile />', () => {

    it('renders without crashing', () => {
        shallow(<FriendProfile store={store} />)
    });

    it('renders profile name', () => {
        const myProfile = {
            id: 1,
            name: 'foo'
        };
        const wrapper = shallow(<FriendProfile store={store} profile={myProfile} />);
    });

});