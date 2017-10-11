import React from 'react';
import {shallow, mount} from 'enzyme';
import  EnterExpenseModal from '../../components/enter-expense-modal';
import '../test-set-up';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


describe('EnterExpenseModal', () => {
    it('Renders without crashing', () => {
        let expense = {category: "gas", amount: 200, date:new Date()};
        shallow(<EnterExpenseModal expense={expense} />);
    });

    it('Should close modal', () => {
        const callback = jest.fn();
        let expense = {category: "gas", amount: 200, date:new Date()};
        const wrapper = mount(<MuiThemeProvider><EnterExpenseModal expense={expense} enterExpense={callback} /></MuiThemeProvider>);
        wrapper.find('button').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
});

