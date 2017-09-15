import React from 'react';
import Header from './Header';
import About from './About';
// import {Link, Redirect} from 'react-router-dom';
import "../index.css";

export default function Home (props) {
    // if (props.loggedIn) {
    //     return <Redirect to="/dashboard" />;
    // }
    return (
            <div>
                <Header /> 
                <About />
            </div>
        
    );
  
}