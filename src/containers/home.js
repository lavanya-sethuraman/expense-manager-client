import React from 'react';
import Header from './header';
import About from '../components/about';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid, Row , Col} from 'react-flexbox-grid';
import "../index.css";

export function Home(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <Grid>
        <Row>
          <Col xs>
          <Header />
          </Col>
        </Row>
        <Row>
          <Col xs>
          <About />
          </Col>
        </Row>
      </Grid>
  
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);
