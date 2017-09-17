Highcharts.chart('container', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 10,
            beta: 25,
            depth: 70
        }
    },
    title: {
        text: 'Expense Manager'
    },
    subtitle: {
        text: 'Expenditure on Monthly Basis'
    },
    plotOptions: {
        column: {
            depth: 20
        }
    },
    xAxis: {
        categories: Highcharts.getOptions().lang.shortMonths
    },
    yAxis: {
        title: {
            text: 'Amount'
        }
    },
    series: [{
        name: 'Expenses',
        data: [2000, 3000, null, 4000, 0, 5000, 10000, 400, 6000, 3000,5600,6000]
    }]
});

Highcharts.chart('container-1', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        }
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
});