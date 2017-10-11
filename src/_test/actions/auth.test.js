import {
    SET_AUTH_TOKEN,
    setAuthToken,
    SET_CURRENT_USER,
    setCurrentUser,
    login
} from '../../actions/auth';
import {API_BASE_URL} from '../../config';


describe('setAuthToken', () => {
    it('Should return the action', () => {
        const token = 'secret-token';
        const action =  setAuthToken(token);
        expect(action.type).toEqual(SET_AUTH_TOKEN);
    });
});

describe('setCurrentUser', () => {
    it('Should return the action', () => {
        const user = 'test';
        const action = setCurrentUser(user);
        expect(action.type).toEqual(SET_CURRENT_USER);
    });
});

describe('login', () => {
    it('Should dispatch login', () => {
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true
            })
        );
        const dispatch = jest.fn();
        return login()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(
                `${API_BASE_URL}`+"/auth/login", 
                {"headers": {"Authorization": "Basic dW5kZWZpbmVkOnVuZGVmaW5lZA=="}, 
                "method": "POST" }
            );
        });
   });
});