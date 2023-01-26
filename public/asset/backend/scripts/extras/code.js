'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('#extras-code')) {
            return false;
        }
        $('.highlight pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
})();
