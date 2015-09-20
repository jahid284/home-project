jQuery(function ($) {

    'use strict';



    // -------------------------------------------------------------
    // Preloader
    // -------------------------------------------------------------
    (function () {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    }());




    // ------------------------------------------------------------------
    // sticky menu
    // ------------------------------------------------------------------
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("sticky-nav");
        } else {
            $(".navbar-fixed-top").removeClass("sticky-nav");
        }
    });



    // -------------------------------------------------------------
    // OffCanvas
    // -------------------------------------------------------------
    (function () {
        $('button.navbar-toggle').HippoOffCanvasMenu({
        documentWrapper: '#main-wrapper',
        contentWrapper : '.content-wrapper',
        position       : 'hippo-offcanvas-left',    // class name
        // opener         : 'st-menu-open',            // class name
        effect         : 'slide-in-on-top',             // class name
        closeButton    : '#off-canvas-close-btn',
        menuWrapper    : '.offcanvas-menu',                 // class name below-pusher
        documentPusher : '.offcanvas-pusher'
        });
    }());



    // -----------------------------------------------------------------
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    // ------------------------------------------------------------------

    (function () {
        $('a.page-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }());




    // -------------------------------------------------------------
    // PrettyPhoto
    // -------------------------------------------------------------
    (function () {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto(); 
    }());

   





    // -------------------------------------------------------------
    // Flickrfeed #photoStream Footer widget
    // -------------------------------------------------------------

    (function () {

        if ($('#photoStreamOne').length > 0) { 
            $('#photoStreamOne').jflickrfeed({
                limit: 8,
                qstrings: {
                    id: '52617155@N08'
                },
                itemTemplate: '<li>'+
                                '<a href="{{image}}" title="{{title}}">' +
                                    '<img src="{{image_s}}" alt="{{title}}" />' +
                                '</a>' +
                              '</li>'
            });
        }

    }());




    // -------------------------------------------------------------
    //  Block Quote Slider
    // -------------------------------------------------------------
    (function () {

        $('.blockquoteSlider').owlCarousel({
            loop:true,
            nav:false,
            margin: 30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        })

    }());



    // -------------------------------------------------------------
    //  clientSlider
    // -------------------------------------------------------------
    (function () {

        $('.clientSlider').owlCarousel({
            margin: 60,
            loop:true,
            autoplay:true,
            nav:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        })

    }());



    //-------------------------------------------------------
    // creative-counter
    //-------------------------------------------------------
    $('.creative-counter').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });




      // -------------------------------------------------------------
    // Twitter Feed on Blog Page Widget
    // -------------------------------------------------------------
    (function () {


     
            var twitterConfig = {
                id: "567185781790228482", //put your Widget ID here
                domId: "twitterWidget",
                maxTweets: 2,
                enableLinks: true,
                showUser: true,
                showTime: true,
                showInteraction: false
            };

            twitterFetcher.fetch(twitterConfig);
        

    }());




    // -------------------------------------------------------------
    // Footer Fourteen Google Maps
    // -------------------------------------------------------------
    (function () {
        if ($('#NewYorkMap').length > 0) {

            //set your google maps parameters
            var $latitude = 40.712784, 
                $longitude = -74.005941,
                $map_zoom = 14; /* ZOOM SETTING */

            //we define here the style of the map
            var style = [{
                "stylers": [{
                    "hue": "#65d3e3"
                }, {
                    "saturation": -100
                }, {
                    "gamma": 2.15
                }, {
                    "lightness": 12
                }]
            }];


             //set google map options
            var map_options = {
                center: new google.maps.LatLng($latitude, $longitude),
                zoom: $map_zoom,
                panControl: false,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: style,
            }

            //initialize the map
            var map = new google.maps.Map(document.getElementById('NewYorkMap'), map_options);
            //add a custom marker to the map                
            
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng($latitude, $longitude),
                map: map,
                visible: true
            });
        };

        if ($('#SydneyMap').length > 0) {

            //set your google maps parameters
            var $latitude = -33.867487, 
                $longitude = 151.206990,
                $map_zoom = 14; /* ZOOM SETTING */

            //we define here the style of the map
            var style = [{
                "stylers": [{
                    "hue": "#65d3e3"
                }, {
                    "saturation": -100
                }, {
                    "gamma": 2.15
                }, {
                    "lightness": 12
                }]
            }];


             //set google map options
            var map_options = {
                center: new google.maps.LatLng($latitude, $longitude),
                zoom: $map_zoom,
                panControl: false,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: style,
            }

            //initialize the map
            var map = new google.maps.Map(document.getElementById('SydneyMap'), map_options);
            //add a custom marker to the map                
            
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng($latitude, $longitude),
                map: map,
                visible: true
            });
        };

    }());






}); // JQuery end
