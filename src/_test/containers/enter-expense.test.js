import React from 'react';
import {shallow} from 'enzyme';
import  EnterExpense from '../../containers/enter-expense';
import '../test-set-up';
import {mockStore} from '../test-set-up';

const expenseManagerReducer = {
    budget: {},
    expense: [{gas:300}],
    totalExpense:{}
};

const authReducer= {
    authToken: null,
    currentUser: "test"
};

const initialState = {
    expenseManager: expenseManagerReducer,
    auth: authReducer
}
const store = mockStore(initialState);

describe('Dashboard Header', () => {
    let wrapper; 
    beforeEach(() => {
        wrapper = shallow(<EnterExpense store={store} />); 
    }); 

    it('Renders without crashing', () => {
        expect(wrapper.length).toEqual(1);        
    });

    it("check user loggeedIn", () => {
        expect(wrapper.prop('expense')).toEqual(initialState.expenseManager.expense);        
     });

});
