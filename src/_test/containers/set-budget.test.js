import React from 'react';
import {shallow, mount} from 'enzyme';
import  SetBudget from '../../containers/set-budget';
import '../test-set-up';
import {mockStore} from '../test-set-up';

const expenseManagerReducer = {
    budget: {
        gas: 0,
        water: 0,
        electricity: 10,
        tv: 0,
        rent: 0,
        phone: 0,
        misc: 0,
        groceries: 0,
        kids: 0,
        travel: 0,
        restaurant: 0
    },
    expense: [],
    totalExpense:{}
};

const authReducer= {
    authToken: null,
    currentUser: null
};

const initialState = {
    expenseManager: expenseManagerReducer,
    auth: authReducer
}

const store = mockStore(initialState);



describe('SetBudget', () => {
    let wrapper; 
    beforeEach(() => {
        wrapper = shallow(<SetBudget store={store} />); 
    }); 

    it('Renders without crashing', () => {
        expect(wrapper.length).toEqual(1)        
    });

    it("check Prop matches with initialState", () => {
        expect(wrapper.prop('budget')).toEqual(initialState.expenseManager.budget)
     });
});
