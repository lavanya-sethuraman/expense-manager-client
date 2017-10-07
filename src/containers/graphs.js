import React from 'react';
import Chart from '../components/highcharts';
import { connect } from 'react-redux';

export class Graphs extends React.Component {

    graphData() {
        let categories = [];
        let amount = [];
        this.props.totalExpense.forEach((expense) => {
            categories.push(expense.category)
        });
        this.props.totalExpense.forEach((expense) => {
            amount.push(expense.amount)
        });
        console.log(amount, categories)
        let options = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Expense Manager'
            },
            subtitle: {
                text: 'Expenditure on Monthly Basis'
            },
            plotOptions: {
                column: {
                    depth: 40
                }
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    text: 'Amount'
                }
            },
            tooltip: {
                headerFormat: '<b>{point.key}</b><br>'
            },
            series: [{
                name: 'Expense',
                data: amount
            }]
        };
        return options;
    }

    render() {
        return (
            <Chart container='chart' options={this.graphData()} />
        );
    }
}

const mapStateToProps = state => ({
    totalExpense: state.expenseManager.totalExpense
});

export default connect(mapStateToProps)(Graphs);




