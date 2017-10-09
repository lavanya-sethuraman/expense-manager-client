import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Login from './login';
import Signup from './sign-up';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export function Header(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <AppBar title={<span >Expense Manager</span>}
            iconElementLeft={<i class="material-icons">attach_money</i>}
            iconElementRight={<div> <Signup />
                                    <Login />
                                </div>
            }
        />
    );

}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
