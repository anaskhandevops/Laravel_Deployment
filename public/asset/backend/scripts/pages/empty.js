/**
 * @author Batch Themes Ltd.
 */
(function() {
    'use strict';
    $(function() {
        if (!element_exists('#pages-empty')) {
            return false;
        }
		var h = $(document).height() - 330;
		$('.sample-text').css('min-height', h + 'px');
		console.log(h);

    });
})();
