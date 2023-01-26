'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('#charts-easy-pie-chart')) {
            return false;
        }
        var config = $.localStorage.get('config');
        var colors = config.colors;
        //primary
        easyPieChart('.easy-pie-chart-primary-xs', colors.primary, colors.grey200, 100);
        easyPieChart('.easy-pie-chart-primary-md', colors.primary, colors.grey200, 150);
        easyPieChart('.easy-pie-chart-primary-lg', colors.primary, colors.grey200, 200);
        //secondary
        easyPieChart('.easy-pie-chart-secondary-xs', colors.secondary, colors.grey200, 100);
        easyPieChart('.easy-pie-chart-secondary-md', colors.secondary, colors.grey200, 150);
        easyPieChart('.easy-pie-chart-secondary-lg', colors.secondary, colors.grey200, 200);
        //info
        easyPieChart('.easy-pie-chart-info-xs', colors.info, colors.grey200, 100);
        easyPieChart('.easy-pie-chart-info-md', colors.info, colors.grey200, 150);
        easyPieChart('.easy-pie-chart-info-lg', colors.info, colors.grey200, 200);
        //success
        easyPieChart('.easy-pie-chart-success-xs', colors.success, colors.grey200, 100);
        easyPieChart('.easy-pie-chart-success-md', colors.success, colors.grey200, 150);
        easyPieChart('.easy-pie-chart-success-lg', colors.success, colors.grey200, 200);
        //warning
        easyPieChart('.easy-pie-chart-warning-xs', colors.warning, colors.grey200, 100);
        easyPieChart('.easy-pie-chart-warning-md', colors.warning, colors.grey200, 150);
        easyPieChart('.easy-pie-chart-warning-lg', colors.warning, colors.grey200, 200);
        //danger
        easyPieChart('.easy-pie-chart-danger-xs', colors.danger, colors.grey200, 100);
        easyPieChart('.easy-pie-chart-danger-md', colors.danger, colors.grey200, 150);
        easyPieChart('.easy-pie-chart-danger-lg', colors.danger, colors.grey200, 200);
    });
})();
