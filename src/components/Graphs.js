import React from 'react';
import Chart from '../components/highcharts';
const options = {
    chart: {
        type: 'column',
    },
  
    title: {
        text: 'Expense Manager'
    },
  
    xAxis: {
        categories: ['Jan', 'Feb', 'March', 'April', 'May']
    },
  
    yAxis: {
        allowDecimals: false,
        min: 100,
        title: {
            text: 'Amount'
        }
    },
  
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    },
  
    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 40
        }
    },
  
    series: [{
        name: 'Gas',
        data: [200, 350, 400, 500, 270],
        stack: 'expense'
    }, {
        name: 'Water',
        data: [60, 45, 79, 90, 54],
        stack: 'expense'
    }, {
        name: 'tv',
        data: [200, 200, 200, 200, 200],
        stack: 'expense'
    }, {
        name: 'kids',
        data: [350, 0, 400, 400, 300],
        stack: 'expense'
    }, {
        name: 'travel',
        data: [200, 350, 400, 500, 270],
        stack: 'expense'
    },{
        name: 'groceries',
        data: [200, 350, 400, 500, 270],
        stack: 'expense'
    },{
        name: 'phone',
        data: [200, 350, 400, 500, 270],
        stack: 'expense'
    },{
        name: 'Misc',
        data: [200, 350, 400, 500, 270],
        stack: 'expense'
    },{
        name: 'electricity',
        data: [200, 350, 400, 500, 270],
        stack: 'expense'
    },{
        name: 'food',
        data: [200, 350, 400, 500, 270],
        stack: 'expense'
    },{
        name: 'travel',
        data: [200, 350, 400, 500, 270],
        stack: 'expense'
    }]
  
};




export default class Graphs extends React.Component {

    render() {
        return (
            <Chart container='chart' options={options} />
        );
    }
}






