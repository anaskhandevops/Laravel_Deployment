'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('#charts-echarts')) {
            return false;
        }
        var config = $.localStorage.get('config');
        var colors = config.colors;
        //http://echarts.baidu.com/gallery/index.html
        //horizontal bar chart 1
        var horizontalBarChart1 = echarts.init(document.getElementById('echart-horizontal-bar-chart-1'));
        var option1 = {
            color: [colors.success, colors.danger],
            title: {
                text: null,
                subtext: null
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['2015', '2016']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['USA', 'Saudi Arabia', 'Russia', 'China', 'Canada', 'UAE']
            },
            series: [{
                name: '2015',
                type: 'bar',
                data: [13379, 11429, 10351, 4271, 3984, 3273]
            }, {
                name: '2016',
                type: 'bar',
                data: [13973, 11624, 10853, 4572, 4383, 3471]
            }]
        };
        horizontalBarChart1.setOption(option1);
        //horizontal bar chart 2
        /*
        var horizontalBarChart2 = echarts.init(document.getElementById('echart-horizontal-bar-chart-2'));
        var option2 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { 
                    type: 'shadow' // line' | 'shadow'
                }
            },
            legend: {
                data: ['one', 'two', 'three', 'four', 'fifth']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh']
            },
            series: [{
                name: 'Serie 1',
                type: 'bar',
                stack: 'serie 1',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            }, {
                name: 'Serie 2',
                type: 'bar',
                stack: 'serie 2',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            }, {
                name: 'Serie 3',
                type: 'bar',
                stack: 'serie 3',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            }, {
                name: 'Serie 4',
                type: 'bar',
                stack: 'serie 4',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [150, 212, 201, 154, 190, 330, 410]
            }, {
                name: 'Serie 5',
                type: 'bar',
                stack: 'serie 5',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
            }]
        };
        horizontalBarChart2.setOption(option2);
		*/
        //bar chart 1
        var barChart1 = echarts.init(document.getElementById('echart-bar-chart-1'));
        var option4 = {
            color: [colors.primary, colors.secondary],
            title: {
                text: null,
                subtext: null
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['one', 'two']
            },
            toolbox: {
                show: false,
                feature: {
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: 'Serie 1',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                markPoint: {
                    data: [{
                        type: 'max',
                        name: 'Max'
                    }, {
                        type: 'min',
                        name: 'Min'
                    }]
                },
                markLine: {
                    data: [{
                        type: 'average',
                        name: 'Avg'
                    }]
                }
            }, {
                name: 'Serie 2',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                markPoint: {
                    data: [{
                        name: 'one',
                        value: 182.2,
                        xAxis: 7,
                        yAxis: 183
                    }, {
                        name: 'two',
                        value: 2.3,
                        xAxis: 11,
                        yAxis: 3
                    }]
                },
                markLine: {
                    data: [{
                        type: 'average',
                        name: 'avg'
                    }]
                }
            }]
        };
        barChart1.setOption(option4);
        //bar chart 2
        var barChart2 = echarts.init(document.getElementById('echart-bar-chart-2'));
        var option5 = {
            color: [colors.primary, colors.secondary, colors.info, colors.success, colors.warning, colors.danger],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // line' | 'shadow'
                }
            },
            legend: {
                data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['1', '2', '3', '4', '5', '6', '7']
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: 'Serie A',
                type: 'bar',
                data: [320, 332, 301, 334, 390, 330, 320]
            }, {
                name: 'Serie B',
                type: 'bar',
                stack: 'serie b',
                data: [120, 132, 101, 134, 90, 230, 210]
            }, {
                name: 'Serie C',
                type: 'bar',
                stack: 'serie c',
                data: [220, 182, 191, 234, 290, 330, 310]
            }, {
                name: 'Serie D',
                type: 'bar',
                stack: 'serie d',
                data: [150, 232, 201, 154, 190, 330, 410]
            }, {
                name: 'Serie E',
                type: 'bar',
                data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                markLine: {
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    },
                    data: [
                        [{
                            type: 'min'
                        }, {
                            type: 'max'
                        }]
                    ]
                }
            }, {
                name: 'Serie F',
                type: 'bar',
                barWidth: 5,
                stack: 'serie f',
                data: [620, 732, 701, 734, 1090, 1130, 1120]
            }, {
                name: 'Serie G',
                type: 'bar',
                stack: 'serie g',
                data: [120, 132, 101, 134, 290, 230, 220]
            }, {
                name: 'Serie H',
                type: 'bar',
                stack: 'serie h',
                data: [60, 72, 71, 74, 190, 130, 110]
            }, {
                name: 'Serie I',
                type: 'bar',
                stack: 'serie i',
                data: [62, 82, 91, 84, 109, 110, 120]
            }]
        };
        barChart2.setOption(option5);
        //line chart 1
        var lineChart1 = echarts.init(document.getElementById('echart-line-chart-1'));
        function randomData() {
            now = new Date(+now + oneDay);
            value = value + Math.random() * 21 - 10;
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'),
                    Math.round(value)
                ]
            };
        }
        var data = [];
        var now = new Date(2010, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var value = Math.random() * 1000;
        for (var i = 0; i < 1000; i++) {
            data.push(randomData());
        }
        var option6 = {
            color: [colors.primary],
            title: {
                text: null
            },
            tooltip: {
                trigger: 'axis',
                formatter: function(params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: 'Serie A',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data
            }]
        };
        lineChart1.setOption(option6);
        setInterval(function() {
            for (var i = 0; i < 5; i++) {
                data.shift();
                data.push(randomData());
            }
            lineChart1.setOption({
                series: [{
                    data: data
                }]
            });
        }, 1000);
        //line chart 2
        var lineChart2 = echarts.init(document.getElementById('echart-line-chart-2'));
        var option7 = {
            color: [colors.primary, colors.secondary, colors.info, colors.success, colors.warning, colors.danger],
            title: {
                text: null,
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}'
            },
            legend: {
                left: 'left',
                data: ['A', 'B']
            },
            xAxis: {
                type: 'category',
                name: 'x',
                splitLine: {
                    show: false
                },
                data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'log',
                name: 'y'
            },
            series: [{
                name: 'Serie A',
                type: 'line',
                data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
            }, {
                name: 'Serie B',
                type: 'line',
                data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
            }, {
                name: 'Serie C',
                type: 'line',
                data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]
            }]
        };
        lineChart2.setOption(option7);
        //area chart 1
        var areaChart1 = echarts.init(document.getElementById('echart-area-chart-1'));
        var option8 = {
            color: [colors.primary, colors.secondary, colors.info, colors.success, colors.warning, colors.danger],
            title: {
                text: null
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['one', 'two', 'three', 'four', 'five']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: 'serie 1',
                type: 'line',
                stack: 'one',
                areaStyle: {
                    normal: {}
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            }, {
                name: 'serie 2',
                type: 'line',
                stack: 'two',
                areaStyle: {
                    normal: {}
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            }, {
                name: 'serie 3',
                type: 'line',
                stack: 'three',
                areaStyle: {
                    normal: {}
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            }, {
                name: 'serie 4',
                type: 'line',
                stack: 'four',
                areaStyle: {
                    normal: {}
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            }, {
                name: 'serie 5',
                type: 'line',
                stack: 'five',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {
                    normal: {}
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }]
        };
        areaChart1.setOption(option8);
        //donut chart 1
        var donutChart1 = echarts.init(document.getElementById('echart-donut-chart-1'));
        var option9 = {
            color: [colors.primary, colors.secondary, colors.info, colors.success, colors.warning, colors.danger],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['one', 'two', 'three', 'four', 'five']
            },
            series: [{
                name: 'serie 1',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 335,
                    name: 'one'
                }, {
                    value: 310,
                    name: 'two'
                }, {
                    value: 234,
                    name: 'three'
                }, {
                    value: 135,
                    name: 'four'
                }, {
                    value: 1548,
                    name: 'five'
                }]
            }]
        };
        donutChart1.setOption(option9);
        //pie chart 1
        var pieChart1 = echarts.init(document.getElementById('echart-pie-chart-1'));
        var option10 = {
            color: [colors.primary, colors.secondary, colors.info, colors.success, colors.warning, colors.danger],
            title: {
                text: null,
                subtext: null,
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['USA', 'Saudi Arabia', 'Russia', 'China', 'Canada', 'Others']
            },
            series: [{
                name: 'Oil production',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [{
                    value: 13,
                    name: 'USA'
                }, {
                    value: 11,
                    name: 'Saudi Arabia'
                }, {
                    value: 10,
                    name: 'Russia'
                }, {
                    value: 4,
                    name: 'Canada'
                }, {
                    value: 40,
                    name: 'Others'
                }],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        pieChart1.setOption(option10);
        //pie chart 2
        var pieChart2 = echarts.init(document.getElementById('echart-pie-chart-2'));
        var option11 = {
            color: [colors.primary, colors.secondary, colors.info, colors.success, colors.warning, colors.danger],
            backgroundColor: colors.grey900,
            title: {
                text: null,
                left: 'center',
                top: 20,
                textStyle: {
                    color: colors.grey300
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [{
                name: 'serie 1',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [{
                    value: 335,
                    name: 'one'
                }, {
                    value: 310,
                    name: 'two'
                }, {
                    value: 274,
                    name: 'three'
                }, {
                    value: 235,
                    name: 'four'
                }, {
                    value: 400,
                    name: 'five'
                }].sort(function(a, b) {
                    return a.value - b.value;
                }),
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        pieChart2.setOption(option11);
        //funnel chart 1
        var funnelChart1 = echarts.init(document.getElementById('echart-funnel-chart-1'));
        var option12 = {
            color: [colors.primary, colors.secondary, colors.info, colors.success, colors.warning, colors.danger],
            title: {
                text: null,
                subtext: null
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            legend: {
                data: ['one', 'two', 'three', 'four', 'five']
            },
            calculable: true,
            series: [{
                name: 'serie 1',
                type: 'funnel',
                left: '10%',
                top: 60,
                //x2: 80,
                bottom: 60,
                width: '80%',
                // height: {totalHeight} - y - y2,
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    },
                    emphasis: {
                        textStyle: {
                            fontSize: 20
                        }
                    }
                },
                labelLine: {
                    normal: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                },
                data: [{
                    value: 60,
                    name: 'one'
                }, {
                    value: 40,
                    name: 'two'
                }, {
                    value: 20,
                    name: 'three'
                }, {
                    value: 80,
                    name: 'four'
                }, {
                    value: 100,
                    name: 'five'
                }]
            }]
        };
        funnelChart1.setOption(option12);
    });
})();
