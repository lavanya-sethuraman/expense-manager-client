import React from 'react';
import SideBar from '../components/side-bar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SetBudget from '../containers/set-budget';
import EnterExpense from '../containers/enter-expense';
import TrackSpending from '../containers/track-spending';
import Paper from 'material-ui/Paper';
import Graphs from '../components/graphs';
import '../index.css';

const style = {
  height: 500,
  width: 900,
  marginTop: 20,
  marginLeft: 50,
  textAlign: 'center',
  display: 'inline-block',
};

const routes = [
  {
    path: '/dashboard',
    exact: true,
    main: () => <Paper style={style} zDepth={1}><h1>Welcome!</h1></Paper>,
  },
  {
    path: '/setbudget',
    exact: true,
    main: () => <SetBudget />,
  },
  {
    path: '/enterexpenses',
    exact: true,
    main: () => <EnterExpense />,
  },
  {
    path: '/trackspending',
    exact: true,
    main: () => <TrackSpending />,
  },
  {
    path: '/graphs',
    exact: true,
    main: () => <Paper style={style} zDepth={1}><Graphs /></Paper>,
  }
]

export default function MainContainer() {
  return (
    <Router>
      <div className="inline">
        <SideBar />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.eaxct}
            component={route.main}
          />
        ))}
      </div>
    </Router>
  );
}