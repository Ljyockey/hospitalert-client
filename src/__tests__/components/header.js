import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../store';

import Header from '../../components/header';

describe('<Header />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><Header /></Provider>)
    });

});