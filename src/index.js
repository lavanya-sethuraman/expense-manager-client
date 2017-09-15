import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ExpenseManager from './components/ExpenseManager';
import './index.css';


ReactDOM.render(
  <Provider>
  <ExpenseManager />
  </Provider>,
  document.getElementById('root')
);

