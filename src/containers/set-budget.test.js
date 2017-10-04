import React from 'react';
import {shallow} from 'enzyme';
import  SetBudget from './set-budget';
import '../../src/test-set-up'


describe('SetBudget', () => {
    it('Renders without crashing', () => {
        shallow(<SetBudget />);
    });
});
