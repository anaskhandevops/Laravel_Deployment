'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('#charts-nvd3')) {
            return false;
        }
        var config = $.localStorage.get('config');
        var colors = config.colors;
        //pie chart
        nv.addGraph(function() {
            var chart = nv.models.pieChart()
                .x(function(d) {
                    return d.label;
                })
                .y(function(d) {
                    return d.value;
                })
                .showLegend(false)
                .showLabels(true);
            d3.select("#nvd3-pie svg")
                .datum(pieChartData())
                .transition()
                .duration(350)
                .call(chart);
            return chart;
        });
        //donut chart
        nv.addGraph(function() {
            var chart = nv.models.pieChart()
                .x(function(d) {
                    return d.label;
                })
                .y(function(d) {
                    return d.value;
                })
                .showLabels(true)
                .showLegend(false)
                .labelThreshold(0.05)
                .labelType("percent")
                .donut(true)
                .donutRatio(0.35);
            d3.select("#nvd3-donut svg")
                .datum(pieChartData())
                .transition()
                .duration(350)
                .call(chart);
            return chart;
        });
        //bar chart
        nv.addGraph(function() {
            var chart = nv.models.multiBarChart()
                .reduceXTicks(true)
                .rotateLabels(0)
                .showControls(true)
                .groupSpacing(0.1)
                .color([colors.danger, colors.warning, colors.success]);
            chart.xAxis
                .tickFormat(d3.format(',f'));
            chart.yAxis
                .tickFormat(d3.format(',.1f'));
            d3.select('#nvd3-bar svg')
                .datum(barChartData())
                .call(chart);
            nv.utils.windowResize(chart.update);
            return chart;
        });
        //bar chart 2
        nv.addGraph(function() {
            var chart = nv.models.discreteBarChart()
                .x(function(d) {
                    return d.label;
                })
                .y(function(d) {
                    return d.value;
                })
                .staggerLabels(true)
                .showValues(true)
                .color([colors.danger, colors.warning, colors.success]);
            d3.select('#nvd3-bar-2 svg')
                .datum(discreteBarChartData())
                .call(chart);
            nv.utils.windowResize(chart.update);
            return chart;
        });
        //horizontal bar
        nv.addGraph(function() {
            var chart = nv.models.multiBarHorizontalChart()
                .x(function(d) {
                    return d.label;
                })
                .y(function(d) {
                    return d.value;
                })
                .margin({
                    top: 30,
                    right: 20,
                    bottom: 50,
                    left: 175
                })
                .showValues(true)
                .showControls(true);
            chart.yAxis
                .tickFormat(d3.format(',.2f'));
            d3.select('#nvd3-horizontal-bar svg')
                .datum(multiBarHorizontalChartData())
                .call(chart);
            nv.utils.windowResize(chart.update);
            return chart;
        });
        //line chart
        nv.addGraph(function() {
            var chart = nv.models.lineChart()
                .margin({
                    left: 100
                })
                .useInteractiveGuideline(true)
                .showLegend(true)
                .showYAxis(true)
                .showXAxis(true);
            chart.xAxis
                .axisLabel('Time (ms)')
                .tickFormat(d3.format(',r'));
            chart.yAxis
                .axisLabel('Voltage (v)')
                .tickFormat(d3.format('.02f'));
            d3.select('#nvd3-line svg')
                .datum(sinAndCos())
                .call(chart);
            nv.utils.windowResize(function() {
                chart.update();
            });
            return chart;
        });
        //scatter chart
        nv.addGraph(function() {
            var chart = nv.models.scatterChart()
                .showDistX(true)
                .showDistY(true)
                .color(d3.scale.category10().range());
            chart.xAxis.tickFormat(d3.format('.02f'));
            chart.yAxis.tickFormat(d3.format('.02f'));
            d3.select('#nvd3-scatter svg')
                .datum(scatterChartData())
                .call(chart);
            nv.utils.windowResize(chart.update);
            return chart;
        });
    });
})();
