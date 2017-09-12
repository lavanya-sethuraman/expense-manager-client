import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import '../index.css';

const style = {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
};

export default function SideBar() {
    return (
        <div className="sidebar">
            <Paper style={style}>
                <Menu>
                    <MenuItem primaryText="Set Budget" />
                    <Divider />
                    <MenuItem primaryText="Enter Expenses" />
                    <Divider />
                    <MenuItem primaryText="Graphs and Charts" />
                    <Divider />
                    <MenuItem primaryText="Track Spending" />
                    <Divider />
                    <MenuItem primaryText="Calculator" />
                    <Divider />
                    <MenuItem primaryText="Calendar" />
                </Menu>
            </Paper>
        </div>
    );
}
