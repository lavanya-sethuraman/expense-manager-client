import React from 'react';
import SideBar from './side-bar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SetBudget from '../containers/set-budget';
import EnterExpense from '../containers/enter-expense';
import TrackSpending from '../containers/track-spending';
import Graphs from '../containers/graphs';
import { Row, Col } from 'react-flexbox-grid';
import '../index.css';
let name="";
const routes = [
  {
    path: '/dashboard',
    exact: true,
    main: () => <div className="styles"><h1>Welcome {name}!</h1></div>,
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
    main: () => <div className="styles"><h1>Expense Chart</h1><Graphs /></div>,
  }
]

export default function MainContainer(props) {
  name=props.name.toUpperCase();
  return (
    <Router>
      <Row>
        <Col xs={0} sm={3} md={2} lg={2} >
        <div className="windowSize">
          <SideBar />
          </div>
        </Col>
        <Col xs={12} sm={9} md={10} lg={10}>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.eaxct}
            component={route.main}
            props={props}
          />
        ))}
        </Col>
      </Row>
    </Router>
  );
}

