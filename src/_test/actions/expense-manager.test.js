import {
    FETCH_EXPENSE_MANAGER_SUCCESS,
    fetchExpenseManagerSuccess,
    setBudget,
    enterExpense,
    fetchExpenseManager
} from '../../actions/expense-manager';
import { API_BASE_URL } from '../../config';

describe('fetchExpenseManagerSuccess', () => {
    it('Should return the action', () => {
        const data = 'data';
        const action = fetchExpenseManagerSuccess(data);
        expect(action.type).toEqual(FETCH_EXPENSE_MANAGER_SUCCESS);
    });
});

describe('fetchExpenseManager', () => {
    it('Should return an action ', () => {
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true
            })
        );
        const authToken = "dW5kZWZpbmVkOnVuZGVmaW5lZA==";
        const getState = jest.fn().mockImplementation(() => { return { auth: {authToken} } }
        );
        const dispatch = jest.fn();
        return fetchExpenseManager()(dispatch, getState).then(() => {
            expect(fetch).toHaveBeenCalledWith(
                `${API_BASE_URL}` + "/auth/protected",
                {
                    "headers": { "Authorization": `Bearer ${authToken}` },
                    "method": "GET"
                }
            );
        });
    });
});



