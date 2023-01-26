'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('#tables-datatable')) {
            return false;
        }
        $('#datatable-example-1').DataTable({
            "ajax": '/assets/json/datatables.json'
        });
        $('#datatable-example-2').DataTable();
    });
})();
