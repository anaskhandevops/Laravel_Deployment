'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('#tables-sortable')) {
            return false;
        }
        Sortable.init();
    });
})();
