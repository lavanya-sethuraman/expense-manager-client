import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import '../index.css';

const style = {
    width: 900,
    marginTop: 20,
    marginLeft: 200,
    textAlign: 'center',
    display: 'inline-block',
};

export default function SetBudget() {
    return (
        <Paper style={style} zDepth={1}>
            <h1>Set Budget</h1>
            <TextField
                hintText="Number"
                floatingLabelText="Gas"
                floatingLabelFixed={true}
            />
            <br />
            <TextField
                hintText="Number"
                floatingLabelText="Water"
                floatingLabelFixed={true}
            />
            <br />
            <TextField
                hintText="Number"
                floatingLabelText="Electricity"
                floatingLabelFixed={true}
            />
            <br />
            <TextField
                hintText="Number"
                floatingLabelText="Rent or Mortgage"
                floatingLabelFixed={true}
            />
            <br />
            <TextField
                hintText="Number"
                floatingLabelText="Television"
                floatingLabelFixed={true}
            />
            <br />
            <TextField
                hintText="Number"
                floatingLabelText="Phone"
                floatingLabelFixed={true}
            />
            <br />
            <TextField
                hintText="Number"
                floatingLabelText="Groceries"
                floatingLabelFixed={true}
            />
            <br />
            <TextField
                hintText="Number"
                floatingLabelText="Restaurant"
                floatingLabelFixed={true}
            />
            <br />
            <TextField
                hintText="Number"
                floatingLabelText="Kids"
                floatingLabelFixed={true}
            />
            <br />
            <TextField
                hintText="Number"
                floatingLabelText="Travel"
                floatingLabelFixed={true}
            />
            <br />
            <TextField
                hintText="Number"
                floatingLabelText="Miscellaneous"
                floatingLabelFixed={true}
            />
            <br />
            <br />
            <RaisedButton label="Set Budget" primary={true} />
            <br />
            <br />
        </ Paper>
    );
}

