'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        //test if chart-js canvas elements are present
        if (!element_exists('#charts-chart-js')) {
            return false;
        }
        var config = $.localStorage.get('config');
        var colors = config.colors;
        Chart.defaults.global.responsive = true;
        var lineChartCtx = document.getElementById("chart-js-line-chart");
        var lineChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                fill: false,
                lineTension: 0.1,
                backgroundColor: hexToRgbA(colors.success, 0.5),
                borderColor: hexToRgbA(colors.success, 1),
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: hexToRgbA(colors.success, 1),
                pointBackgroundColor: colors.white,
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: hexToRgbA(colors.success, 1),
                pointHoverBorderColor: hexToRgbA(colors.success, 1),
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [
                    random(20, 80),
                    random(20, 80),
                    random(20, 80),
                    random(20, 80),
                    random(20, 80),
                    random(20, 80),
                    random(20, 80)
                ],
            }]
        };
        var lineChartOptions = {};
        var lineChart = new Chart(lineChartCtx, {
            type: 'line',
            data: lineChartData,
            options: lineChartOptions
        });
        var areaChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                fill: true,
                lineTension: 0.1,
                backgroundColor: hexToRgbA(colors.danger, 0.5),
                borderColor: hexToRgbA(colors.danger, 1),
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: hexToRgbA(colors.danger, 1),
                pointBackgroundColor: colors.white,
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: hexToRgbA(colors.danger, 1),
                pointHoverBorderColor: hexToRgbA(colors.danger, 1),
                pointHoverBorderWidth: 3,
                pointRadius: 2,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
            }]
        };
        var areaChartCtx = document.getElementById("chart-js-area-chart");
        var areaChart = new Chart(areaChartCtx, {
            type: 'line',
            data: areaChartData,
            options: {}
        });
        var barChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: hexToRgbA(colors.primary, 0.5),
                borderColor: hexToRgbA(colors.primary, 1),
                borderWidth: 2,
                hoverBackgroundColor: hexToRgbA(colors.primary, 0.5),
                hoverBorderColor: hexToRgbA(colors.primary, 1),
                data: [35, 49, 60, 41, 66, 65, 45],
            }, {
                label: "My second dataset",
                backgroundColor: hexToRgbA(colors.success, 0.5),
                borderColor: hexToRgbA(colors.success, 1),
                borderWidth: 2,
                hoverBackgroundColor: hexToRgbA(colors.success, 0.5),
                hoverBorderColor: hexToRgbA(colors.success, 1),
                data: [65, 59, 80, 81, 56, 55, 40],
            }]
        };
        var barChartCtx = document.getElementById("chart-js-bar-chart");
        var barChart = new Chart(barChartCtx, {
            type: 'bar',
            data: barChartData,
            options: {}
        });
        var horizontalBarChartCtx = document.getElementById("chart-js-horizontal-bar-chart");
        var horizontalBarChart = new Chart(horizontalBarChartCtx, {
            type: 'horizontalBar',
            data: barChartData,
            options: {}
        });
        var radarChartData = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: hexToRgbA(colors.warning, 0.5),
                borderColor: hexToRgbA(colors.warning, 1),
                pointBackgroundColor: hexToRgbA(colors.warning, 1),
                pointBorderColor: colors.white,
                pointHoverBackgroundColor: colors.white,
                pointHoverBorderColor: hexToRgbA(colors.warning, 1),
                data: [65, 59, 90, 81, 56, 55, 40]
            }, {
                label: "My Second dataset",
                backgroundColor: hexToRgbA(colors.danger, 0.5),
                borderColor: hexToRgbA(colors.danger, 1),
                pointBackgroundColor: hexToRgbA(colors.danger, 1),
                pointBorderColor: colors.white,
                pointHoverBackgroundColor: colors.white,
                pointHoverBorderColor: hexToRgbA(colors.danger, 1),
                data: [28, 48, 40, 19, 96, 27, 100]
            }]
        };
        var radarChartCtx = document.getElementById("chart-js-radar-chart");
        var myRadarChart = new Chart(radarChartCtx, {
            type: 'radar',
            data: radarChartData,
            options: {}
        });
        var polarAreaChartData = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    colors.success,
                    colors.warning,
                    colors.danger,
                    colors.info,
                    colors.primary
                ],
                label: 'My dataset' // for legend
            }],
            labels: [
                "Green",
                "Yellow",
                "Red",
                "Info",
                "Primary"
            ]
        };
        var polarAreaChartCtx = document.getElementById("chart-js-polar-area-chart");
        var polarAreaChart = new Chart(polarAreaChartCtx, {
            type: 'polarArea',
            data: polarAreaChartData,
            options: {}
        });
        var pieChartData = {
            labels: [
                "Green",
                "Yellow",
                "Red"
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    colors.success,
                    colors.warning,
                    colors.danger
                ],
                hoverBackgroundColor: [
                    darken(colors.success, 10),
                    darken(colors.warning, 10),
                    darken(colors.danger, 10)
                ]
            }]
        };
        var pieChartCtx = document.getElementById("chart-js-pie-chart");
        var pieChart = new Chart(pieChartCtx, {
            type: 'pie',
            data: pieChartData,
            options: {}
        });
        var doughnutChartCtx = document.getElementById("chart-js-doughnut-chart");
        var myDoughnutChart = new Chart(doughnutChartCtx, {
            type: 'doughnut',
            data: pieChartData,
            options: {}
        });
    });
})();
