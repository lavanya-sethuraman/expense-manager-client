import React from 'react';
import Header from '../components/header';
import About from '../components/about';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import "../index.css";

export function Home(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div>
            <Header />
            <About />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);
