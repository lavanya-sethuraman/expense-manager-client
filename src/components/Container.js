import React from 'react';
import Paper from 'material-ui/Paper';
import '../index.css';

const style = {
    height: 300,
    width: 900,
    marginTop: 20,
    marginLeft: 200,
    textAlign: 'center',
    display: 'inline-block',
};

export default function Container() {
    return (
        <Paper style={style} zDepth={1}>
            <h1>Welcome to Expense Manager!</h1>
        </Paper>
    );
}