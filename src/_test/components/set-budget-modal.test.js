import React from 'react';
import {shallow, mount} from 'enzyme';
import  SetBudgetModal from '../../components/set-budget-modal';
import '../test-set-up';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


describe('SetBudgetModal', () => {
    it('Renders without crashing', () => {
        shallow(<SetBudgetModal />);
    });

    it('Should close modal', () => {
        const callback = jest.fn();
        const budget = {};
        const wrapper = mount(<MuiThemeProvider><SetBudgetModal budget={budget} setBudget={callback} /></MuiThemeProvider>);
        wrapper.find('button').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
});
