import React from 'react';
import {shallow} from 'enzyme';
import  SetBudgetModal from '../../components/set-budget-modal';
import '../test-set-up'


describe('SetBudgetModal', () => {
    it('Renders without crashing', () => {
        shallow(<SetBudgetModal />);
    });
});
