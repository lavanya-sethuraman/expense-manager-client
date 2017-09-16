import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import ExpenseManager from './components/ExpenseManager';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
  <ExpenseManager />
  </Provider>,
  document.getElementById('root')
);

