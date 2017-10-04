import React from 'react';
import {shallow} from 'enzyme';
import  Login from './login';
import '../../src/test-set-up'


describe('Login', () => {
    it('Renders without crashing', () => {
        shallow(<Login />);
    });
});
