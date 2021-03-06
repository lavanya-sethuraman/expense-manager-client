import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import ExpenseManager from '../src/containers/expense-manager';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
  <ExpenseManager />
  </Provider>,
  document.getElementById('root')
);
