import React from 'react';
import Highcharts from 'highcharts';


export default class Chart extends React.Component {
    componentDidMount() {
        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(Highcharts);
            });
        }
        this.chart = new Highcharts[this.props.type || "Chart"](
            this.props.container,
            this.props.options
        );
    }
    componentWillUnmount() {
        this.chart.destroy();
    }
    render() {
        return (<div id={this.props.container}></div>);
    }
}







