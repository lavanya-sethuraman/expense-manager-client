import {createStore, applyMiddleware, combineReducers} from 'redux';
import {expenseManagerReducer} from './reducers/index';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import {setAuthToken} from './actions/auth';

const store = createStore(
    combineReducers({
        expenseManager: expenseManagerReducer,
        auth: authReducer,
        protectedData: protectedDataReducer
    }),
    applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
}

export default store;
