'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('#forms-date-picker')) {
            return false;
        }

        $('#date').bootstrapMaterialDatePicker({
            time: false,
            clearButton: true
        }).on('change', function(e, date) {
        	console.log('selected', e, date);
        });

        $('#time').bootstrapMaterialDatePicker({
            date: false,
            shortTime: false,
            format: 'HH:mm'
        }).on('change', function(e, date) {
        	console.log('selected', e, date);
        });

        $('#date-format').bootstrapMaterialDatePicker({
            format: 'dddd DD MMMM YYYY - HH:mm'
        }).on('change', function(e, date) {
        	console.log('selected', e, date);
        });

        $('#date-fr').bootstrapMaterialDatePicker({
            format: 'DD/MM/YYYY HH:mm',
            lang: 'fr',
            weekStart: 1,
            cancelText: 'ANNULER',
            nowButton: true,
            switchOnClick: true
        }).on('change', function(e, date) {
        	console.log('selected', e, date);
        });

    });
})();
