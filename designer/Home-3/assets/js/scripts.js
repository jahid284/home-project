jQuery(function ($) {

    'use strict';


    // -------------------------------------------------------------
    // Preloader
    // -------------------------------------------------------------
    (function () {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
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




    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------
    (function () {
        var nav = $('.navbar');
        var scrolled = false;

        $(window).scroll(function () {

            if (110 < $(window).scrollTop() && !scrolled) {
                nav.addClass('sticky animated fadeInDown').animate({ 'margin-top': '0px' });

                scrolled = true;
            }

            if (110 > $(window).scrollTop() && scrolled) {
                nav.removeClass('sticky animated fadeInDown').css('margin-top', '0px');

                scrolled = false;
            }
        });

    }());



    // -------------------------------------------------------------
    // dropdown hover
    // -------------------------------------------------------------
    (function () {
         $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');            
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');              
            }
        );
    }());



    // -------------------------------------------------------------
    // PrettyPhoto
    // -------------------------------------------------------------

    (function () {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto(); 
    }());



    

    


    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------
        (function () {

            $('.back-to-top').on('click', function (event) {
                event.preventDefault();
                $('html, body').animate({scrollTop: 0}, 1000);
                return false;
            })
        }());





        // -----------------------------------------------------------------
    //STELLAR FOR BACKGROUND SCROLLING
    // ------------------------------------------------------------------


    (function () {

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
         
        }else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    }());

    // -------------------------------------------------------------
    //  home-portfolio-slider
    // -------------------------------------------------------------
    (function () {

        $('.homeSlider').owlCarousel({
            loop:true,
            dots:false,
            autoplay:true,
            nav:false,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:4,
                }             
            }
        })

    }());


    // -------------------------------------------------------------
    // partner-testimonial
    // -------------------------------------------------------------
    (function () {
        $('.partner-testimonial').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false
        })

    }());



    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------
 
    $('.skill').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).off('inview');
        }
    });


// -------------------------------------------------------------
    // Footer Fourteen Twitter Feed
    // -------------------------------------------------------------
    (function () {
        var twitterWidgetConfig = {
            id: "567185781790228482", //put your Widget ID here
            domId: "twitterWidgetFourteen",
            maxTweets: 2,
            enableLinks: true,
            showUser: true,
            showTime: true,
            showInteraction: false
        };

        twitterFetcher.fetch(twitterWidgetConfig);

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






}); 



