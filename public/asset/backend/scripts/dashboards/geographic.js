'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('#dashboards-geographic')) {
            return false;
        }
        var config = $.localStorage.get('config');
        var colors = config.colors;

        var loaderTime = 3200;
        setTimeout(function() {
            $('.counter-1').text('1,227').counterUp({
                delay: 1,
                time: 100
            });
            $('.counter-2').text('3,334').counterUp({
                delay: 1,
                time: 100
            });
            $('.counter-3').text('23,345').counterUp({
                delay: 1,
                time: 100
            });
            $('.counter-4').text('6,559').counterUp({
                delay: 1,
                time: 100
            });
            animatedPeityLine('.small-line-1', 32, colors.primary);
            animatedPeityLine('.small-line-2', 32, colors.primary);
            animatedPeityLine('.small-line-3', 32, colors.primary);
            animatedPeityLine('.small-line-4', 32, colors.primary);
            easyPieChart('.easy-pie-chart-primary-1', colors.primary, colors.grey200, 150);
            easyPieChart('.easy-pie-chart-primary-2', colors.primary, colors.grey200, 150);
            easyPieChart('.easy-pie-chart-primary-3', colors.primary, colors.grey200, 150);
        }, loaderTime);

        var world = new Datamap({
            element: document.getElementById("world"),
            responsive: true,
            projection: 'mercator',
            fills: {
                defaultFill: colors.blue100,
                altFill: colors.blue200,
                dangerFill: colors.danger,
                warningFill: colors.warning,
                infoFill: colors.info,
                successFill: colors.success
            },
            geographyConfig: {
                borderWidth: 1,
                borderOpacity: 1,
                borderColor: colors.blue200,
                highlightOnHover: true,
                highlightFillColor: colors.blue200,
                highlightBorderColor: colors.blue200,
                highlightBorderWidth: 1,
                highlightBorderOpacity: 1
            },
            labels: {
                labelColor: 'blue',
                fontSize: 12
            },
            data: {
                AUS: {
                    fillKey: "infoFill"
                },
                JPN: {
                    fillKey: "dangerFill"
                },
                ITA: {
                    fillKey: "altFill"
                },
                BRA: {
                    fillKey: "successFill"
                },
                DEU: {
                    fillKey: "warningFill"
                },
            }
        });
        window.addEventListener('resize', function() {
            world.resize();
        });
    });
})();
