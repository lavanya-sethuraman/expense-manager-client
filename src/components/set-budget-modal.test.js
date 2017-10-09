import React from 'react';
import {shallow} from 'enzyme';
import  SetBudgetModal from './set-budget-modal';
import '../../src/test-set-up'


describe('SetBudgetModal', () => {
    it('Renders without crashing', () => {
        shallow(<SetBudgetModal />);
    });
});
