'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if ($('#chartist-chart-10').length > 0) {
            //chart80();
            chart70();
            //chart2();
            //chart1();
            chart13();
            //chart14();
            chart15();
            chart16();
            chart30();
            chart31();
            chart3();
            chart4();
            chart5();
            chart6();
            chart7();
            chart8();
            //chart9();
            chart10();
            chart11();
            chart12();
        }
    });
    function chart12() {
        var data12 = {
            labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
            series: [
                [5, 4, 3, 7],
                [3, 2, 9, 5],
                [1, 5, 8, 4],
                [2, 3, 4, 6]
            ]
        };
        var options12 = {
            stackBars: true,
            axisX: {
                labelInterpolationFnc: function(value) {
                    return value.split(/\s+/).map(function(word) {
                        return word[0];
                    }).join('');
                }
            },
            axisY: {
                offset: 20
            }
        };
        var responsiveOptions12 = [
            // Options override for media > 400px
            ['screen and (min-width: 400px)', {
                reverseData: true,
                horizontalBars: true,
                axisX: {
                    labelInterpolationFnc: Chartist.noop
                },
                axisY: {
                    offset: 60
                }
            }],
            // Options override for media > 800px
            ['screen and (min-width: 800px)', {
                stackBars: false,
                seriesBarDistance: 10
            }],
            // Options override for media > 1000px
            ['screen and (min-width: 1000px)', {
                reverseData: false,
                horizontalBars: false,
                seriesBarDistance: 15
            }]
        ];
        new Chartist.Bar('#chartist-chart-12', data12, options12, responsiveOptions12);
    }
    function chart13() {
        var data13 = {
            labels: ['XS', 'S', 'M', 'L'],
            series: [20, 60, 120, 200]
        };
        var options13 = {
            distributeSeries: true,
            axisX: {
                position: 'start'
            },
            axisY: {
                position: 'end'
            }
        };
        new Chartist.Bar('#chartist-chart-13', data13, options13);
    }
    function chart14() {
        var data14 = {
            series: [5, 3, 4]
        };
        var sum = function(a, b) {
            return a + b;
        };
        var options14 = {
            labelInterpolationFnc: function(value) {
                return Math.round(value / data14.series.reduce(sum) * 100) + '%';
            }
        };
        new Chartist.Pie('#chartist-chart-14', data14, options14);
    }
    function chart15() {
        var data15 = {
            labels: ['Bananas', 'Apples', 'Grapes'],
            series: [20, 15, 40]
        };
        var options15 = {
            labelInterpolationFnc: function(value) {
                return value[0];
            }
        };
        var responsiveOptions15 = [
            ['screen and (min-width: 640px)', {
                chartPadding: 30,
                labelOffset: 100,
                labelDirection: 'explode',
                labelInterpolationFnc: function(value) {
                    return value;
                }
            }],
            ['screen and (min-width: 1024px)', {
                labelOffset: 80,
                chartPadding: 20
            }]
        ];
        new Chartist.Pie('#chartist-chart-15', data15, options15, responsiveOptions15);
    }
    function chart16() {
        var data16 = {
            series: [20, 10, 30, 40]
        };
        var options16 = {
            donut: true,
            donutWidth: 60,
            startAngle: 270,
            total: 200,
            showLabel: false
        };
        new Chartist.Pie('#chartist-chart-16', data16, options16);
    }
    function chart1() {
        var data1 = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            series: [
                [12, 9, 7, 8, 5],
                [2, 1, 3.5, 7, 3],
                [1, 3, 4, 5, 6]
            ]
        };
        var options1 = {
            fullWidth: true,
            chartPadding: {
                right: 40
            }
        };
        var responsiveOptions1 = [
            ['screen and (min-width: 641px) and (max-width: 1024px)', {
                chartPadding: {
                    right: 20
                }
            }],
            ['screen and (max-width: 640px)', {
                chartPadding: {
                    right: 10
                }
            }]
        ];
        new Chartist.Line('#chartist-chart-1', data1, options1, responsiveOptions1);
    }
    function chart2() {
        var data2 = {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                [1, 2, 3, 1, -2, 0, 1, 0],
                [-2, -1, -2, -1, -3, -1, -2, -1],
                [0, 0, 0, 1, 2, 3, 2, 1],
                [3, 2, 1, 0.5, 1, 0, -1, -3]
            ]
        };
        var options2 = {
            high: 3,
            low: -3,
            fullWidth: true,
            axisY: {
                onlyInteger: true,
                offset: 20
            }
        };
        new Chartist.Line('#chartist-chart-2', data2, options2);
    }
    function chart70() {
        var asyncData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            series: [
                [1000, 1200, 1300, 1200, 1440, 1800],
                [1600, 1550, 1497, 1440, 1200, 1000],
            ]
        };
        new Chartist.Line('#chartist-chart-70', asyncData);
    }
    function chart80() {
        var data80 = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
                [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
            ]
        };
        new Chartist.Line('#chartist-chart-80', data80);
    }
    function chart30() {
        var data30 = {
            series: [20, 10, 30, 40]
        };
        new Chartist.Pie('#chartist-chart-30', data30);
    }
    function chart31() {
        var data31 = {
            series: [20, 10, 30, 40]
        };
        var options31 = {
            donut: true
        };
        new Chartist.Pie('#chartist-chart-31', data31, options31);
    }
    function chart3() {
        var times = function(n) {
            return Array.apply(null, new Array(n));
        };
        var data3 = times(52).map(Math.random).reduce(function(data, rnd, index) {
            data.labels.push(index + 1);
            data.series.forEach(function(series) {
                series.push(Math.random() * 100);
            });
            return data;
        }, {
            labels: [],
            series: times(4).map(function() {
                return [];
            })
        });
        var options3 = {
            showLine: false,
            axisX: {
                labelInterpolationFnc: function(value, index) {
                    return index % 13 === 0 ? 'W' + value : null;
                }
            }
        };
        var responsiveOptions3 = [
            ['screen and (min-width: 640px)', {
                axisX: {
                    labelInterpolationFnc: function(value, index) {
                        return index % 4 === 0 ? 'W' + value : null;
                    }
                }
            }]
        ];
        new Chartist.Line('#chartist-chart-3', data3, options3, responsiveOptions3);
    }
    function chart4() {
        var data4 = {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            series: [
                [5, 9, 7, 8, 5, 3, 5, 4, 5]
            ]
        };
        var options4 = {
            fullWidth: true,
            low: 0,
            showArea: true
        };
        new Chartist.Line('#chartist-chart-4', data4, options4);
    }
    function chart5() {
        var data5 = {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                [1, 2, 3, 1, -2, 0, 1, 0],
                [-2, -1, -2, -1, -2.5, -1, -2, -1],
                [0, 0, 0, 1, 2, 2.5, 2, 1],
                [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
            ]
        };
        var options5 = {
            high: 3,
            low: -3,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
                showLabel: false,
                showGrid: false
            }
        };
        new Chartist.Line('#chartist-chart-5', data5, options5);
    }
    function chart6() {
        var data6 = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            series: [
                [1, 5, 2, 5, 4, 3],
                [2, 3, 4, 8, 1, 2],
                [5, 4, 3, 2, 1, 0.5]
            ]
        };
        var options6 = {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true
        };
        var chart6 = new Chartist.Line('#chartist-chart-6', data6, options6);
        chart6.on('draw', function(data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 2000 * data.index,
                        dur: 2000,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            }
        });
    }
    function chart7() {
        var data7 = {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
                [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
            ]
        };
        var options7 = {
            high: 10,
            low: -10,
            axisX: {
                labelInterpolationFnc: function(value, index) {
                    return index % 2 === 0 ? value : null;
                }
            }
        };
        new Chartist.Bar('#chartist-chart-7', data7, options7);
    }
    function chart8() {
        var data8 = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
                [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
            ]
        };
        var options8 = {
            seriesBarDistance: 10
        };
        var responsiveOptions8 = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function(value) {
                        return value[0];
                    }
                }
            }]
        ];
        new Chartist.Bar('#chartist-chart-8', data8, options8, responsiveOptions8);
    }
    function chart9() {
        var data9 = {
            labels: ['First quarter of the year', 'Second quarter of the year', 'Third quarter of the year', 'Fourth quarter of the year'],
            series: [
                [60000, 40000, 80000, 70000],
                [40000, 30000, 70000, 65000],
                [8000, 3000, 10000, 6000]
            ]
        };
        var options9 = {
            seriesBarDistance: 10,
            axisX: {
                offset: 60
            },
            axisY: {
                offset: 120,
                labelInterpolationFnc: function(value) {
                    return value + ' CHF';
                },
                scaleMinSpace: 15
            }
        };
        new Chartist.Bar('#chartist-chart-9', data9, options9);
    }
    function chart10() {
        var data10 = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            series: [
                [800000, 1200000, 1400000, 1300000],
                [200000, 400000, 500000, 300000],
                [100000, 200000, 400000, 600000]
            ]
        };
        var options10 = {
            stackBars: true,
            axisY: {
                labelInterpolationFnc: function(value) {
                    return (value / 1000) + 'k';
                }
            }
        };
        var chart10 = Chartist.Bar('#chartist-chart-10', data10, options10);
        chart10.on('draw', function(data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 40px'
                });
            }
        });
    }
    function chart11() {
        var data11 = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            series: [
                [5, 4, 3, 7, 5, 10, 3],
                [3, 2, 9, 5, 4, 6, 4]
            ]
        };
        var options11 = {
            seriesBarDistance: 10,
            reverseData: true,
            horizontalBars: true,
            axisY: {
                offset: 70
            }
        };
        new Chartist.Bar('#chartist-chart-11', data11, options11);
    }
})();
