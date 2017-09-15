import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Home';
import DashBoard from './DashBoard';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "../index.css";

export default function ExpenseManager() {
    return (
        <MuiThemeProvider>
        <Router>
            <div>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={DashBoard} />
                </main>
            </div>
        </Router>
        </MuiThemeProvider>
    );
  
}