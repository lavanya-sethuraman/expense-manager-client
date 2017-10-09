import {
    FETCH_EXPENSE_MANAGER_SUCCESS,
    fetchExpenseManagerSuccess,
    setBudget,
    enterExpense,
    fetchExpenseManager
} from './expense-manager';
import { API_BASE_URL } from '../config';

describe('fetchExpenseManagerSuccess', () => {
    it('Should return the action', () => {
        const data = 'data';
        const action =  fetchExpenseManagerSuccess(data);
        expect(action.type).toEqual(FETCH_EXPENSE_MANAGER_SUCCESS);
    });
});




// describe('fetchExpenseManager', () => {
//     it('Should return an action ', () => {
//         global.fetch = jest.fn().mockImplementation(() =>
//             Promise.resolve({
//                 ok: true
//             })
//         );
//         global.getState = jest.fn().mockImplementation(() =>
//              state
//         );
//         const dispatch = jest.fn();
//                 return fetchExpenseManager(getState)(dispatch).then(() => {
//                     expect(fetch).toHaveBeenCalledWith(
//                         `${API_BASE_URL}`+"/auth/protected", 
//                         {"headers": {"Authorization": "Basic dW5kZWZpbmVkOnVuZGVmaW5lZA=="}, 
//                         "method": "GET" }
//                     );
//                 });
//     });
// });

// describe('setCurrentUser', () => {
//     it('Should return the action', () => {
//         const user = 'test';
//         const action = setCurrentUser(user);
//         expect(action.type).toEqual(SET_CURRENT_USER);
//     });
// });

// describe('login', () => {
//     it('Should dispatch login', () => {
//         global.fetch = jest.fn().mockImplementation(() =>
//             Promise.resolve({
//                 ok: true
//             })
//         );
//         const dispatch = jest.fn();
//         return login()(dispatch).then(() => {
//             expect(fetch).toHaveBeenCalledWith(
//                 `${API_BASE_URL}`+"/auth/login", 
//                 {"headers": {"Authorization": "Basic dW5kZWZpbmVkOnVuZGVmaW5lZA=="}, 
//                 "method": "POST" }
//             );
//         });
//    });
// });