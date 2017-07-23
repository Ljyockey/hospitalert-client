import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';

import Dashboard from '../components/dashboard';
import FriendProfile from '../components/friend-profile';
import Friends from '../components/friends';
import Header from '../components/header';
import Hospitalert from '../components/hospitalert';
import LandingMain from '../components/landing-main';
import Lancding from '../components/landing';
import Nav from '../components/nav';
import NewHosp from '../components/new-hosp';

describe('<Dashboard />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><Dashboard /></Provider>)
    });

});

describe('<FriendProfile />', () => {

    it('renders without crashing', () => {
        shallow(<FriendProfile store={store} />)
    });

});

describe('<Friends />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><Friends /></Provider>)
    });

});

describe('<Header />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><Header /></Provider>)
    });

});

describe('<Hospitalert />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><Hospitalert /></Provider>)
    });

});

describe('<LandingMain />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><LandingMain /></Provider>)
    });

});

describe('<Lancding />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><Lancding /></Provider>)
    });

});

describe('<Nav />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><Nav /></Provider>)
    });

});

describe('<NewHosp />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><NewHosp /></Provider>)
    });

});
