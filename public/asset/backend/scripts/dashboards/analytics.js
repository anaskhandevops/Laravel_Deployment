'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('#dashboards-analytics')) {
            return false;
        }
        var config = $.localStorage.get('config');
        var colors = config.colors;

        var loaderTime = 3200;
        setTimeout(function() {
            $('.counter-1').text('1,998').counterUp({
                delay: 1,
                time: 100
            });
            $('.counter-2').text('4,553').counterUp({
                delay: 1,
                time: 100
            });
            $('.counter-3').text('230').counterUp({
                delay: 1,
                time: 100
            });
            $('.counter-4').text('4,564').counterUp({
                delay: 1,
                time: 100
            });
            $('.counter-5').text('52,774').counterUp({
                delay: 1,
                time: 100
            });
            $('.counter-6').text('5,221').counterUp({
                delay: 1,
                time: 100
            });
            $('.counter-7').text('8,771').counterUp({
                delay: 1,
                time: 100
            });
            $('.counter-8').text('964').counterUp({
                delay: 1,
                time: 100
            });
            animatedPeityBar('.small-bar-1', 32, colors.primary);
            animatedPeityBar('.small-bar-2', 32, colors.primary);
            animatedPeityBar('.small-bar-3', 32, colors.primary);
            animatedPeityBar('.small-bar-4', 32, colors.primary);
            easyPieChart('.easy-pie-chart-primary-1', colors.primary, colors.grey200, 100);
            easyPieChart('.easy-pie-chart-primary-2', colors.primary, colors.grey200, 100);
        }, loaderTime);
        //bar chart
        nv.addGraph(function() {
            var chart = nv.models.multiBarChart()
                .reduceXTicks(true)
                .rotateLabels(0)
                .showControls(false)
                .groupSpacing(0.1)
                .stacked(true)
                .color([colors.danger, colors.warning, colors.success]);
            chart.xAxis
                .tickFormat(d3.format(',f'));
            chart.yAxis
                .tickFormat(d3.format(',.1f'));
            d3.select('#nvd3-bar svg')
                .datum(analyticsBarChartData())
                .call(chart);
            nv.utils.windowResize(chart.update);
            return chart;
        });
    });
})();
