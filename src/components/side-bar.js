import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import '../index.css';

const style = {
    display: 'inline-block',
    margin: '50px 32px 16px 0',
};

export default function SideBar() {
    return (
        <Paper style={style}>
            <Menu className="bkgnd">
                <Link className="noLine" to={`/setbudget`}>
                    <MenuItem className="white" primaryText="Set Budget" />
                </Link>
                <Divider />
                <Link className="noLine" to={`/enterexpenses`}>
                    <MenuItem  className="white" primaryText="Enter Expenses" />
                </Link>
                <Divider />
                <Link className="noLine" to={`/graphs`}>
                    <MenuItem  className="white" primaryText="Graphs and Charts" />
                </Link>
                <Divider />
                <Link className="noLine" to={`/trackspending`}>
                    <MenuItem  className="white" primaryText="Track Spending" />
                </Link>
            </Menu>
        </Paper>

    );
}

