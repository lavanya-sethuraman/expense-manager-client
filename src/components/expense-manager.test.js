import React from 'react';
import {shallow} from 'enzyme';
import  ExpenseManager from './expense-manager';
import '../../src/test-set-up'


describe('ExpenseManager', () => {
    it('Renders without crashing', () => {
        shallow(<ExpenseManager />);
    });
});
