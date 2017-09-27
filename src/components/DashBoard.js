import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchProtectedData} from '../actions/protected-data';
import DashBoardHeader from '../components/DashBoardHeader';
import MainContainer from '../components/MainContainer';
import { Grid, Row } from 'react-flexbox-grid';
import "../index.css";


export class DashBoard extends React.Component {
  
  componentDidMount() {
    if (!this.props.loggedIn) {
       return;
    }
    this.props.dispatch(fetchProtectedData());
}

  render(){
    console.log(this.props)    
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
  
  return (
    <Grid fluid>
      <Row>
        <DashBoardHeader />
      </Row>
      <Row>
        <MainContainer />
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
      protectedData: state.protectedData.data
  };
};

export default connect(mapStateToProps)(DashBoard);
