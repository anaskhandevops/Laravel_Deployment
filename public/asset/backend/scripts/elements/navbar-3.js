'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('.navbar-3')) {
            return false;
        }
        var config = $.localStorage.get('config');
        $(document).on('click', '.top-navigation-links > .open > .dropdown-menu > .dropdown-item > a', function(e) {
            e.preventDefault();
			$('.top-navigation-links .dropdown-submenu').removeClass('open');
			var next = $(this).next();
            next.toggleClass('open')

            return false;
        })
        $('.dropdown-parent').on('hide.bs.dropdown', function() {
            $('.dropdown-submenu').removeClass('open');
        })
        //collapse layout
        $(document).on('click', '.toggle-layout', function(e) {
            e.preventDefault();
            var layout = $('body').data('layout');
            $('body').toggleClass('layout-collapsed');
            if (layout === 'default-sidebar-2' && $('body').hasClass('layout-collapsed')) {
                $('.left-sidebar-backdrop').toggleClass('fade in');
            }
            if (layout === 'top-navigation-1' && $('body').hasClass('layout-collapsed')) {
                $('.left-sidebar-backdrop').toggleClass('fade in');
            }
            if (layout === 'top-navigation-2' && $('body').hasClass('layout-collapsed')) {
                $('.left-sidebar-backdrop').toggleClass('fade in');
            }
            return false;
        });
        $('.left-sidebar-backdrop').on('click', function() {
            $(this).removeClass('fade');
            $(this).removeClass('in');
            $('body').toggleClass('layout-collapsed');
        });
        //toggle right sidebar
        $(document).on('click', '.toggle-right-sidebar', function(e) {
            e.preventDefault();
            $('.right-sidebar-outer').toggleClass('show-from-right');
            var layout = $('body').data('layout');
            if (layout === 'default-sidebar-2' && $('.right-sidebar-outer').hasClass('show-from-right')) {
                $('.right-sidebar-backdrop').toggleClass('fade in');
            } else if (layout === 'top-navigation-1' && $('.right-sidebar-outer').hasClass('show-from-right')) {
                $('.right-sidebar-backdrop').toggleClass('fade in');
            } else if (layout === 'top-navigation-2' && $('.right-sidebar-outer').hasClass('show-from-right')) {
                $('.right-sidebar-backdrop').toggleClass('fade in');
            } else {
                $('.right-sidebar-backdrop').removeClass('fade');
                $('.right-sidebar-backdrop').removeClass('in');
            }
            return false;
        });
        $('.right-sidebar-backdrop').on('click', function() {
            $(this).removeClass('fade');
            $(this).removeClass('in');
            $('.right-sidebar-outer').removeClass('show-from-right');
        });
        //toggle-fullscreen
        $(document).on('click', '.toggle-fullscreen', function(e) {
            e.preventDefault();
            $(document).fullScreen(true);
            return false;
        });
    });
})();
