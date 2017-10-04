import React from 'react';
import {shallow} from 'enzyme';
import  Home from './home';
import '../../src/test-set-up'


describe('Home', () => {
    it('Renders without crashing', () => {
        shallow(<Home />);
    });
});
