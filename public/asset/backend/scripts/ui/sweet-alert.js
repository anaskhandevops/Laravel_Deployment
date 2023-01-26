'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        var config = $.localStorage.get('config');
        var colors = config.colors;
        $('.btn-swal').on('click', function() {
            var action = $(this).data('action');
            if (action === 'basic') {
                swal({
                    title: 'The Internet?',
                    text: 'That thing is still around?',
                    confirmButtonColor: colors.primary
                });
            }
            if (action === 'auto-close') {
                swal({
                    title: 'Auto close alert!',
                    text: 'I will close in 2 seconds.',
                    timer: 2000
                });
            }
            if (action === 'html') {
                swal({
                    title: 'HTML example',
                    html: 'You can use <b>bold text</b>, ' + '<a href="//github.com">links</a> ' + 'and other HTML tags'
                });
            }
            if (action === 'confirm') {
                swal({
                    title: 'Are you sure?',
                    text: 'You will not be able to recover this imaginary file!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!',
                    closeOnConfirm: false
                }, function() {
                    swal('Deleted!', 'Your file has been deleted.', 'success');
                });
            }
            if (action === 'cancel') {
                swal({
                    title: 'Are you sure?',
                    text: 'You will not be able to recover this imaginary file!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel plx!',
                    confirmButtonClass: 'confirm-class',
                    cancelButtonClass: 'cancel-class',
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function(isConfirm) {
                    if (isConfirm) {
                        swal('Deleted!', 'Your file has been deleted.', 'success');
                    } else {
                        swal('Cancelled', 'Your imaginary file is safe :)', 'error');
                    }
                });
            }
        });
    });
})();
