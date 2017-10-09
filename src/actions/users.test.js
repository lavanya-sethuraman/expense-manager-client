import {registerUser} from './users';
import {API_BASE_URL} from '../config';


describe('registerUser', () => {
    it('Should dispatch register user', () => {
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true
            })
        );
        const dispatch = jest.fn();
        return registerUser()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(
                `${API_BASE_URL}`+"/users", 
                {"headers": {'content-type': 'application/json'}, 
                "method": "POST" }
            );
        });
   });
});