import React from 'react';
import DatePicker from 'material-ui/DatePicker';

export default class Datepicker extends React.Component {
  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setDate(minDate.getDate()-10);
    maxDate.setDate(maxDate.getDate());

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
    };
  }
  
  render() {
    return (
      <div>
        <DatePicker
          floatingLabelText="Expense Date"
          mode="landscape"
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          onChange={this.props.onChange}
          shouldDisableDate={this.disableDates}
        />

      </div>
    );
  }
}