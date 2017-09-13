import {createStore} from 'redux'

import {expenseManagerReducer} from './reducers';

export default createStore(expenseManagerReducer);