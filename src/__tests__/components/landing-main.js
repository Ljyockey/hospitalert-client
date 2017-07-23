import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../store';

import LandingMain from '../../components/landing-main';

describe('<LandingMain />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><LandingMain /></Provider>)
    });

});