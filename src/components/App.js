import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Home';
import SetBudget from './SetBudget';
import EnterExpense from './EnterExpense';
import TrackSpending from './TrackSpending';
import DashBoard from './DashBoard';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "../index.css";

export default function App () {
    return (
        <MuiThemeProvider>
        <Router>
            <div>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={DashBoard} />
                    <Route exact path="/setbudget" component={SetBudget} />
                    <Route exact path="/enterexpenses" component={EnterExpense} />
                    {/* <Route exact path="/graphs" component={Graphs} /> */}
                    <Route exact path="/trackspending" component={TrackSpending} />
                    {/* <Route exact path="/calculator" component={Calculator} /> */}
                    {/* <Route exact path="/calendar" component={Calendar} /> */}
                </main>
            </div>
        </Router>
        </MuiThemeProvider>
    );
  
}