import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

export default function DashBoardHeader() {
    return (
        <AppBar title={<span >Expense Manager</span>}
            iconElementLeft={<Avatar src="" size={30} />}
            iconElementRight={<RaisedButton label="Log Out" secondary={true}/>}
        />
    );

}