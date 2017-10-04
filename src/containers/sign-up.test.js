import React from 'react';
import {shallow} from 'enzyme';
import  Signup from './sign-up';
import '../../src/test-set-up';
import store from '../store'


describe('Signup', () => {
    it('Renders without crashing', () => {
        shallow(<Signup store={store} />);
    });
});
