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





    // ----------------------------------------------------------------
    // creative portfolio slider
    // ----------------------------------------------------------------

    (function () {
           
        $('.creative-portfolio-wraper').owlCarousel({
            stagePadding: 100,
            loop:true,
            margin:0,
            nav:false,
            dots:false,
            autoplay:true,
            responsive:{
                0:{
                    items:1,
                    stagePadding: 50
                },
                600:{
                    items:2,
                    stagePadding: 50
                },
                1000:{
                    items:2,
                    stagePadding: 80
                },
                1100:{
                    items:3
                }
            }
        })

    }());




    //-------------------------------------------------------
    // creative-counter
    //-------------------------------------------------------
    $('.creative-counter').on('inview', function(event, visible, visiblePartX, visiblePartY) {
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
            $(this).off('inview');
        }
    });




}); // JQuery end
