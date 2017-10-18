import React from 'react';
import {shallow} from 'enzyme';
import  TrackSpending from '../../containers/track-spending';
import '../test-set-up';
import {mockStore} from '../test-set-up';

const expenseManagerReducer = {
    budget: {gas:100},
    expense: [{gas:100}],
    totalExpense:{gas:100}
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
        wrapper = shallow(<TrackSpending store={store} />); 
    }); 

    it('Renders without crashing', () => {
        expect(wrapper.length).toEqual(1);        
    });

    it("check user loggeedIn", () => {
        expect(wrapper.prop('expenseManager')).toEqual(initialState.expenseManager);
        expect(wrapper.prop('loggedIn')).toEqual(true);        
        
     });

});
