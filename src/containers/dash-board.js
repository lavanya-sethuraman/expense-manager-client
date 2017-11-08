import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchExpenseManager } from '../actions/expense-manager';
import DashBoardHeader from '../containers/dash-board-header';
import MainContainer from '../components/main-container';
import { Grid, Row, Col } from 'react-flexbox-grid';
import "../index.css";


export class DashBoard extends React.Component {

  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    this.props.dispatch(fetchExpenseManager());
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <Grid fluid style={containerStyle}>
        <Row>
          <Col xs >
            <DashBoardHeader />
          </Col>
        </Row>

        <Row>
          <Col xs>
             <MainContainer/>
          </Col>
        </Row>
      </Grid>

    );
  }
}
const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    loggedIn: currentUser !== null,
    userName: currentUser ? state.auth.currentUser.userName : '',
    name: currentUser
      ? `${currentUser.fullName}`
      : '',
    expenseManager: state.expenseManager
  };
};

const containerStyle = {
  paddingLeft: '0px',
  paddingRight: '0px'
}
export default connect(mapStateToProps)(DashBoard);
