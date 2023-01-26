'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('#extras-syntax-highlighting')) {
            return false;
        }
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
})();
