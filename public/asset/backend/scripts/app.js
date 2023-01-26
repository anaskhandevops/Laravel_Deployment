'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {

		var colors = bootstrap_colors();
        var config = {
            name: 'Peak',
            colors: colors
        };

        if ($('html').hasClass('loading')) {
            var loaderTime = 3000;
            var loaderColor = colors.primary;
            var htmlClass = $('html').attr('class').toString();
            if (htmlClass.match(/loading-secondary/gi)) {
                loaderColor = colors.secondary;
            } else if (htmlClass.match(/loading\-info/gi)) {
                loaderColor = colors.info;
            } else if (htmlClass.match(/loading\-success/gi)) {
                loaderColor = colors.success;
            } else if (htmlClass.match(/loading\-warning/gi)) {
                loaderColor = colors.warning;
            } else if (htmlClass.match(/loading\-danger/gi)) {
                loaderColor = colors.danger;
            } else {
                loaderColor = colors.primary;
            }

            $('#fakeloader').fakeLoader({
                timeToHide: loaderTime,
                zIndex: '99999', 
                spinner: 'spinner1', //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
                bgColor: loaderColor
            });
            setTimeout(function() {
                $('html').removeClass('loading');
            }, loaderTime);
        }
        $('body').bootstrapMaterialDesign({
            text: {
                selector: [`input:not([type=range]):not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=file]):not([type=button]):not([type=submit]):not([type=reset])`]
            },
        });

		//development only. remove in production
		$.removeAllStorages();
        if ($.localStorage.isEmpty('config') || !($.localStorage.get('config'))) {
            $.removeAllStorages();
            $.localStorage.set('config', config);
        }
        Mousetrap.bind('ctrl+1', function() {
            $.removeAllStorages();
        });
        Mousetrap.bind('ctrl+2', function() {
            var layout = $('body').data('layout');
            $('body').toggleClass('layout-collapsed');
            if (layout === 'default-sidebar-2' && $('body').hasClass('layout-collapsed')) {
                $('.left-sidebar-backdrop').toggleClass('fade in');
            } else if (layout === 'top-navigation-1' && $('body').hasClass('layout-collapsed')) {
                $('.left-sidebar-backdrop').toggleClass('fade in');
            } else if (layout === 'top-navigation-2' && $('body').hasClass('layout-collapsed')) {
                $('.left-sidebar-backdrop').toggleClass('fade in');
            } else if (layout === 'fixed-navbar-1' && $('body').hasClass('layout-collapsed')) {
                $('.left-sidebar-backdrop').toggleClass('fade in');
            } else {
                $('.left-sidebar-backdrop').removeClass('fade');
                $('.left-sidebar-backdrop').removeClass('in');
            }
        });
        Mousetrap.bind('ctrl+3', function() {
            $('.right-sidebar-outer').toggleClass('show-from-right');
            var layout = $('body').data('layout');
            if ($('.right-sidebar-outer').hasClass('show-from-right')) {
                $('.right-sidebar-backdrop').toggleClass('fade in');
            } else {
                $('.right-sidebar-backdrop').removeClass('fade');
                $('.right-sidebar-backdrop').removeClass('in');
            }
        });
        Mousetrap.bind('ctrl+4', function() {
            $(document).fullScreen(true);
        });
        Mousetrap.bind('ctrl+5', function() {
            $('.top-search').toggleClass('show-from-top');
        });
    });
})();
