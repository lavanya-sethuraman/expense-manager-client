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
        let options = {
            colors:[ '#00bcd4' ],
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
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            align: 'center',
                            verticalAlign: 'bottom',
                            layout: 'horizontal'
                        },
                        yAxis: {
                            labels: {
                                align: 'left',
                                x: 0,
                                y: -5
                            },
                            title: {
                                text: null
                            }
                        },
                        subtitle: {
                            text: null
                        },
                        credits: {
                            enabled: false
                        }
                    }
                }]
            }
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




