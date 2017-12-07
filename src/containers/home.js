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
        <Grid fluid style={containerStyle}>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col xs className="style">
          <About />
          </Col>
        </Row>
      </Grid>

    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

const containerStyle = {
  paddingLeft: '0px',
  paddingRight: '0px'
}

export default connect(mapStateToProps)(Home);
