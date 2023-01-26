'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('#charts-peity')) {
            return false;
        }
        var config = $.localStorage.get('config');
        var colors = config.colors;
        /* line charts */
        var smallLine1 = peityLine('.small-line-1', 16, 32, colors.primary);
        var smallLine2 = peityLine('.small-line-2', 16, 32, colors.secondary);
        var smallLine3 = peityLine('.small-line-3', 16, 32, colors.info);
        var smallLine4 = peityLine('.small-line-4', 16, 32, colors.success);
        var smallLine5 = peityLine('.small-line-5', 16, 32, colors.warning);
        var smallLine6 = peityLine('.small-line-6', 16, 32, colors.danger);
        setInterval(function() {
            var random = Math.round(Math.random() * 10);
            var values = smallLine1.text().split(',');
            values.shift();
            values.push(random);
            smallLine1.text(values.join(',')).change();
            smallLine2.text(values.join(',')).change();
            smallLine3.text(values.join(',')).change();
            smallLine4.text(values.join(',')).change();
            smallLine5.text(values.join(',')).change();
            smallLine6.text(values.join(',')).change();
        }, 1000);
        var mediumLine1 = peityLine('.medium-line-1', 32, 64, colors.primary);
        var mediumLine2 = peityLine('.medium-line-2', 32, 64, colors.secondary);
        var mediumLine3 = peityLine('.medium-line-3', 32, 64, colors.info);
        var mediumLine4 = peityLine('.medium-line-4', 32, 64, colors.success);
        var mediumLine5 = peityLine('.medium-line-5', 32, 64, colors.warning);
        var mediumLine6 = peityLine('.medium-line-6', 32, 64, colors.danger);
        setInterval(function() {
            var random = Math.round(Math.random() * 10);
            var values = mediumLine1.text().split(',');
            values.shift();
            values.push(random);
            mediumLine1.text(values.join(',')).change();
            mediumLine2.text(values.join(',')).change();
            mediumLine3.text(values.join(',')).change();
            mediumLine4.text(values.join(',')).change();
            mediumLine5.text(values.join(',')).change();
            mediumLine6.text(values.join(',')).change();
        }, 1000);
        var largeLine1 = peityLine('.large-line-1', 64, 128, colors.primary);
        var largeLine2 = peityLine('.large-line-2', 64, 128, colors.secondary);
        var largeLine3 = peityLine('.large-line-3', 64, 128, colors.info);
        var largeLine4 = peityLine('.large-line-4', 64, 128, colors.success);
        var largeLine5 = peityLine('.large-line-5', 64, 128, colors.warning);
        var largeLine6 = peityLine('.large-line-6', 64, 128, colors.danger);
        setInterval(function() {
            var random = Math.round(Math.random() * 10);
            var values = largeLine1.text().split(',');
            values.shift();
            values.push(random);
            largeLine1.text(values.join(',')).change();
            largeLine2.text(values.join(',')).change();
            largeLine3.text(values.join(',')).change();
            largeLine4.text(values.join(',')).change();
            largeLine5.text(values.join(',')).change();
            largeLine6.text(values.join(',')).change();
        }, 1000);
        /* bar charts */
        var smallBar1 = peityBar('.small-bar-1', 16, 32, colors.primary);
        var smallBar2 = peityBar('.small-bar-2', 16, 32, colors.secondary);
        var smallBar3 = peityBar('.small-bar-3', 16, 32, colors.info);
        var smallBar4 = peityBar('.small-bar-4', 16, 32, colors.success);
        var smallBar5 = peityBar('.small-bar-5', 16, 32, colors.warning);
        var smallBar6 = peityBar('.small-bar-6', 16, 32, colors.danger);
        setInterval(function() {
            var random = Math.round(Math.random() * 10);
            var values = smallBar1.text().split(',');
            values.shift();
            values.push(random);
            smallBar1.text(values.join(',')).change();
            smallBar2.text(values.join(',')).change();
            smallBar3.text(values.join(',')).change();
            smallBar4.text(values.join(',')).change();
            smallBar5.text(values.join(',')).change();
            smallBar6.text(values.join(',')).change();
        }, 1000);
        var mediumBar1 = peityBar('.medium-bar-1', 32, 64, colors.primary);
        var mediumBar2 = peityBar('.medium-bar-2', 32, 64, colors.secondary);
        var mediumBar3 = peityBar('.medium-bar-3', 32, 64, colors.info);
        var mediumBar4 = peityBar('.medium-bar-4', 32, 64, colors.success);
        var mediumBar5 = peityBar('.medium-bar-5', 32, 64, colors.warning);
        var mediumBar6 = peityBar('.medium-bar-6', 32, 64, colors.danger);
        setInterval(function() {
            var random = Math.round(Math.random() * 10);
            var values = mediumBar1.text().split(',');
            values.shift();
            values.push(random);
            mediumBar1.text(values.join(',')).change();
            mediumBar2.text(values.join(',')).change();
            mediumBar3.text(values.join(',')).change();
            mediumBar4.text(values.join(',')).change();
            mediumBar5.text(values.join(',')).change();
            mediumBar6.text(values.join(',')).change();
        }, 1000);
        var largeBar1 = peityBar('.large-bar-1', 64, 128, colors.primary);
        var largeBar2 = peityBar('.large-bar-2', 64, 128, colors.secondary);
        var largeBar3 = peityBar('.large-bar-3', 64, 128, colors.info);
        var largeBar4 = peityBar('.large-bar-4', 64, 128, colors.success);
        var largeBar5 = peityBar('.large-bar-5', 64, 128, colors.warning);
        var largeBar6 = peityBar('.large-bar-6', 64, 128, colors.danger);
        setInterval(function() {
            var random = Math.round(Math.random() * 10);
            var values = largeBar1.text().split(',');
            values.shift();
            values.push(random);
            largeBar1.text(values.join(',')).change();
            largeBar2.text(values.join(',')).change();
            largeBar3.text(values.join(',')).change();
            largeBar4.text(values.join(',')).change();
            largeBar5.text(values.join(',')).change();
            largeBar6.text(values.join(',')).change();
        }, 1000);
        /* pie charts */
        var smallPie1 = peityPie('.small-pie-1', 32, [colors.grey300, colors.primary]);
        var smallPie2 = peityPie('.small-pie-2', 32, [colors.grey300, colors.secondary]);
        var smallPie3 = peityPie('.small-pie-3', 32, [colors.grey300, colors.info]);
        var smallPie4 = peityPie('.small-pie-4', 32, [colors.grey300, colors.success]);
        var smallPie5 = peityPie('.small-pie-5', 32, [colors.grey300, colors.warning]);
        var smallPie6 = peityPie('.small-pie-6', 32, [colors.grey300, colors.danger]);
        var mediumPie1 = peityPie('.medium-pie-1', 64, [colors.grey300, colors.primary]);
        var mediumPie2 = peityPie('.medium-pie-2', 64, [colors.grey300, colors.secondary]);
        var mediumPie3 = peityPie('.medium-pie-3', 64, [colors.grey300, colors.info]);
        var mediumPie4 = peityPie('.medium-pie-4', 64, [colors.grey300, colors.success]);
        var mediumPie5 = peityPie('.medium-pie-5', 64, [colors.grey300, colors.warning]);
        var mediumPie6 = peityPie('.medium-pie-6', 64, [colors.grey300, colors.danger]);
        var largePie1 = peityPie('.large-pie-1', 128, [colors.grey300, colors.primary]);
        var largePie2 = peityPie('.large-pie-2', 128, [colors.grey300, colors.secondary]);
        var largePie3 = peityPie('.large-pie-3', 128, [colors.grey300, colors.info]);
        var largePie4 = peityPie('.large-pie-4', 128, [colors.grey300, colors.success]);
        var largePie5 = peityPie('.large-pie-5', 128, [colors.grey300, colors.warning]);
        var largePie6 = peityPie('.large-pie-6', 128, [colors.grey300, colors.danger]);
        /* donut charts */
        var smallDonut1 = peityDonut('.small-donut-1', 32, [colors.grey300, colors.primary]);
        var smallDonut2 = peityDonut('.small-donut-2', 32, [colors.grey300, colors.secondary]);
        var smallDonut3 = peityDonut('.small-donut-3', 32, [colors.grey300, colors.info]);
        var smallDonut4 = peityDonut('.small-donut-4', 32, [colors.grey300, colors.success]);
        var smallDonut5 = peityDonut('.small-donut-5', 32, [colors.grey300, colors.warning]);
        var smallDonut6 = peityDonut('.small-donut-6', 32, [colors.grey300, colors.danger]);
        var mediumDonut1 = peityDonut('.medium-donut-1', 64, [colors.grey300, colors.primary]);
        var mediumDonut2 = peityDonut('.medium-donut-2', 64, [colors.grey300, colors.secondary]);
        var mediumDonut3 = peityDonut('.medium-donut-3', 64, [colors.grey300, colors.info]);
        var mediumDonut4 = peityDonut('.medium-donut-4', 64, [colors.grey300, colors.success]);
        var mediumDonut5 = peityDonut('.medium-donut-5', 64, [colors.grey300, colors.warning]);
        var mediumDonut6 = peityDonut('.medium-donut-6', 64, [colors.grey300, colors.danger]);
        var largeDonut1 = peityDonut('.large-donut-1', 128, [colors.grey300, colors.primary]);
        var largeDonut2 = peityDonut('.large-donut-2', 128, [colors.grey300, colors.secondary]);
        var largeDonut3 = peityDonut('.large-donut-3', 128, [colors.grey300, colors.info]);
        var largeDonut4 = peityDonut('.large-donut-4', 128, [colors.grey300, colors.success]);
        var largeDonut5 = peityDonut('.large-donut-5', 128, [colors.grey300, colors.warning]);
        var largeDonut6 = peityDonut('.large-donut-6', 128, [colors.grey300, colors.danger]);
        $.fn.peity.defaults.pie = {
            delimiter: null,
            fill: [colors.primary, colors.secondary, colors.info],
            height: null,
            radius: 8,
            width: null
        };
        $.fn.peity.defaults.donut = {
            delimiter: null,
            fill: [colors.primary, colors.secondary, colors.info],
            height: null,
            innerRadius: null,
            radius: 8,
            width: null
        };
        $.fn.peity.defaults.line = {
            delimiter: ',',
            fill: colors.indigo300,
            height: 16,
            max: null,
            min: 0,
            stroke: colors.indigo500,
            strokeWidth: 1,
            width: 32
        };
        $.fn.peity.defaults.bar = {
            delimiter: ',',
            fill: [colors.primary],
            height: 16,
            max: null,
            min: 0,
            padding: 0.1,
            width: 32
        };
    });
})();
