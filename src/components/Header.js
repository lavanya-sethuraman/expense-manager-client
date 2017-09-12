import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Signup from './Signup';

export default function Header() {
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