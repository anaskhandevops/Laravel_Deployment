/**
 * @author Batch Themes Ltd.
 */
(function() {
    'use strict';
    $(function() {
        if (!element_exists('#pages-coming-soon')) {
            return false;
        }
        var now = new Date();
        now.setDate(now.getDate() + 45);
        $('#coming-soon-counter').countdown(now).on('update.countdown', function(event) {
            $(this).html(event.strftime(
                '<div class="table-responsive"><table class="table"><tr>' +
                '<td><span class="number">%D</span></br><span class="unit">days</span></td>' +
                '<td><span class="dots">:</span></td> ' +
                '<td><span class="number">%H</span></br><span class="unit">hours</span></td>' +
                '<td><span class="dots">:</span></td> ' +
                '<td><span class="number">%M</span></br><span class="unit">minutes</span></td>' +
                '<td><span class="dots">:</span></td> ' +
                '<td><span class="number">%S</span></br><span class="unit">seconds</span></td>' +
                '</tr></table></div>'
            ));
        });
    });
})();
