import React from 'react';
import {shallow} from 'enzyme';
import  EnterExpense from './enter-expense-modal';
import '../../src/test-set-up'


describe('EnterExpense', () => {
    it('Renders without crashing', () => {
        shallow(<EnterExpense />);
    });
});
