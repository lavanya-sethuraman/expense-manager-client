import reducer from '../../reducers/auth';
import { setAuthToken, setCurrentUser } from '../../actions/auth';

describe('auth Reducer', () => {

    const authToken = { token: "secret token" }
    const currentUser = { user: "test user" }

    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, { type: '__UNKNOWN' });
        expect(state).toEqual({
            authToken: null,
            currentUser: null
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = { authToken: null, currentUser: null };
        const state = reducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });

    describe('setAuthToken', () => {
        it('Should set auth token', () => {
            let state;
            state = reducer(state, setAuthToken(authToken));
            expect(state.authToken).toEqual({
                token: "secret token"
            });
        });
    });


    describe('setCurrentUser', () => {
        it('Should set current user', () => {
            let state;
            state = reducer(state, setCurrentUser(currentUser));
            expect(state.currentUser).toEqual({
                user: "test user"
            });
        });
    });
});