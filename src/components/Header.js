import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Login from '../containers/login';
import Signup from '../containers/sign-up';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export function Header(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <AppBar title={<span >Expense Manager</span>}
            iconElementLeft={<Avatar src="" size={30} />}
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
