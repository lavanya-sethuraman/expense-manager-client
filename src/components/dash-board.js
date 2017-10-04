import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchExpenseManager} from '../actions/expense-manager';
import DashBoardHeader from '../components/dash-board-header';
import MainContainer from '../components/main-container';
import { Grid, Row , Col} from 'react-flexbox-grid';
//import {Grid, Row, Col} from 'react-material-responsive-grid';
import "../index.css";


export class DashBoard extends React.Component {
  
  componentDidMount() {
    if (!this.props.loggedIn) {
       return;
    }
    this.props.dispatch(fetchExpenseManager());
}

  render(){
    console.log("dashboard",this.props.expenseManager)    
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
  
  return (
    <Grid fluid>
      <Row>
        <Col md={12} xs={12}>
        <DashBoardHeader />
        </Col>
      </Row>
      <Row>
        <Col>
        <MainContainer />
        </Col>
      </Row>
    </Grid>

  );
  }
}
const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      loggedIn: currentUser !== null,
      userName: currentUser ? state.auth.currentUser.userName : '',
      name: currentUser
          ? `${currentUser.fullName}`
          : '',
      expenseManager: state.expenseManager
  };
};

export default connect(mapStateToProps)(DashBoard);
