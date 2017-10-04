import React from 'react';
import {shallow} from 'enzyme';
import  Graphs from './graphs';
import '../../src/test-set-up'


describe('Graphs', () => {
    it('Renders without crashing', () => {
        shallow(<Graphs />);
    });
});
