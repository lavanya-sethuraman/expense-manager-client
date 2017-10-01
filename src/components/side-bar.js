import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import '../index.css';

const style = {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
};

export default function SideBar() {
    return (
        <Paper className="sidebar left" style={style}>
            <Menu>
                <Link className="noLine" to={`/setbudget`}>
                    <MenuItem primaryText="Set Budget" />
                </Link>
                <Divider />
                <Link className="noLine" to={`/enterexpenses`}>
                    <MenuItem primaryText="Enter Expenses" />
                </Link>
                <Divider />
                <Link className="noLine" to={`/graphs`}>
                    <MenuItem primaryText="Graphs and Charts" />
                </Link>
                <Divider />
                <Link className="noLine" to={`/trackspending`}>
                    <MenuItem primaryText="Track Spending" />
                </Link>
            </Menu>
        </Paper>

    );
}

