import React from 'react';
import {shallow} from 'enzyme';
import About from './about';
import '../../src/test-set-up'


describe('About', () => {
    it('Renders without crashing', () => {
        shallow(<About />);
    });
});
