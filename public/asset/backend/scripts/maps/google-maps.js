'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('#maps-google-maps')) {
            return false;
        }
        var config = $.localStorage.get('config');
        var colors = config.colors;
        initSimpleMap();
        initGeolocationMap();
        initStyledMap(colors);
        initTransitLayer();
        initBicyclingLayer();
        initStreetViewPanorama();
    });
    function initSimpleMap() {
        new google.maps.Map(document.getElementById('simple'), {
            center: {
                lat: -34.397,
                lng: 150.644
            },
            zoom: 8
        });
    }
    //geolocation
    //// Note: This example requires that you consent to location sharing when
    // prompted by your browser. If you see the error "The Geolocation service
    // failed.", it means you probably did not give permission for the browser to
    // locate you.
    function initGeolocationMap() {
        var map = new google.maps.Map(document.getElementById('geolocation'), {
            center: {
                lat: -34.397,
                lng: 150.644
            },
            zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({
            map: map
        });
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    }
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
    }
    //styled
    function initStyledMap(colors) {
        var customMapType = new google.maps.StyledMapType([{
            stylers: [{
                hue: colors.red900
            }, {
                visibility: 'simplified'
            }, {
                gamma: 0.5
            }, {
                weight: 0.5
            }]
        }, {
            elementType: 'labels',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'water',
            stylers: [{
                color: colors.red500
            }]
        }], {
            name: 'Custom Style'
        });
        var customMapTypeId = 'custom_style';
        var map = new google.maps.Map(document.getElementById('styled'), {
            zoom: 12,
            center: {
                lat: 40.674,
                lng: -73.946
            }, // Brooklyn.
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
            }
        });
        map.mapTypes.set(customMapTypeId, customMapType);
        map.setMapTypeId(customMapTypeId);
    }
    function initTransitLayer() {
        var map = new google.maps.Map(document.getElementById('transit-layer'), {
            zoom: 13,
            center: {
                lat: 51.501904,
                lng: -0.115871
            }
        });
        var transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);
    }
    function initBicyclingLayer() {
        var map = new google.maps.Map(document.getElementById('bicycling-layer'), {
            zoom: 14,
            center: {
                lat: 42.3726399,
                lng: -71.1096528
            }
        });
        var bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(map);
    }
    function initStreetViewPanorama() {
        new google.maps.StreetViewPanorama(
            document.getElementById('street-view'), {
                position: {
                    lat: 37.869260,
                    lng: -122.254811
                },
                pov: {
                    heading: 165,
                    pitch: 0
                },
                zoom: 1
            });
    }
})();
