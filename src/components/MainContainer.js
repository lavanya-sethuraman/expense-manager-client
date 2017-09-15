import React from 'react';
import SideBar from './SideBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SetBudget from './SetBudget';
import EnterExpense from './EnterExpense';
import TrackSpending from './TrackSpending';
import '../index.css';

const routes = [
  {
      path: '/setbudget',
      exact: true,
      main: () => <SetBudget />,
      sidebar: () => <SideBar />
  },
  {
      path: '/enterexpenses',
      exact: true,
      main: () => <EnterExpense />,
      sidebar: () => <SideBar />
  },
  {
      path: '/trackspending',
      exact: true,
      main: () => <TrackSpending />,
      sidebar: () => <SideBar />
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