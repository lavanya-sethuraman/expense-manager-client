import React from 'react';
import Header from './Header';
import Container from './Container';
// import {Link, Redirect} from 'react-router-dom';
import "../index.css";

export default function Home (props) {
    // if (props.loggedIn) {
    //     return <Redirect to="/dashboard" />;
    // }
    return (
            <div>
                <Header /> 
                <Container />
            </div>
        
    );
  
}