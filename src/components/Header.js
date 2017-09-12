import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

export default function Header() {
    return (
        <AppBar title={<span >Expense Manager</span>}
            iconElementLeft={<Avatar src="" size={30} />}
            iconElementRight={<div><RaisedButton label="Sign-up" primary={true} />
                <RaisedButton label="Log-in" primary={true} /></div>}
        />
    );

}