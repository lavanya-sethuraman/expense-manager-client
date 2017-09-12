import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ExpenseManager from './components/ExpenseManager';
import './index.css';

 
const App = () => (
  <MuiThemeProvider>
    <ExpenseManager />
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
