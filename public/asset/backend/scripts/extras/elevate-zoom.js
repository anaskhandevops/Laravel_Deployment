'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('#extras-elevate-zoom')) {
            return false;
        }
        $("#zoom_01").elevateZoom({
            borderSize: 0,
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,
            easing: true
        });
        $("#zoom_02").elevateZoom({
            borderSize: 0,
            tint: true,
            tintColour: '#F90',
            tintOpacity: 0.5
        });
        $("#zoom_03").elevateZoom({
            zoomType: "inner",
            cursor: "crosshair"
        });
        $("#zoom_04").elevateZoom({
            borderSize: 0,
            zoomType: "lens",
            lensShape: "round",
            lensSize: 200
        });
        $("#zoom_05").elevateZoom({
            borderSize: 0,
            scrollZoom: true
        });
    });
})();
