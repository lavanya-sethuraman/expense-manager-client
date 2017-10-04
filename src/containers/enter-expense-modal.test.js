import React from 'react';
import {shallow} from 'enzyme';
import  EnterExpenseModal from './enter-expense-modal';
import '../../src/test-set-up'


describe('EnterExpenseModal', () => {
    it('Renders without crashing', () => {
        shallow(<EnterExpenseModal />);
    });
});
