jQuery(function ($) {

    'use strict';


    // -------------------------------------------------------------
    // Preloader
    // -------------------------------------------------------------
    (function () {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
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
    // Revoulation Slider   {slidereighteen}
    // -------------------------------------------------------------
    (function () {
        $('.tp-banner').revolution({
            delay:7000,
            startwidth:1170,
            startheight:1000,
            hideThumbs:10,
            fullWidth:"on",
            forceFullWidth:"on",
            onHoverStop:"off",
            navigationType:"none",
            navigationStyle:"preview3",
            spinner:"spinner5",
            hideTimerBar:"on"
        });
    }());


    // -------------------------------------------------------------
    // PrettyPhoto
    // -------------------------------------------------------------

    (function () {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto(); 
    }());



    

    //-------------------------------------------------------
    // counter-area
    //-------------------------------------------------------
    $('.counter-area').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
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


    // ----------------------------------------------------------------
    // flexslider   {image-gallery}
    // ----------------------------------------------------------------
        (function () {


        $('.image-gallery-wrapper').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false
        })

            // Navigation 
            $('.image-gallery-wrapper-nav .prev').on('click', function(){
                $('.image-gallery-wrapper').flexslider('prev')
                return false;
            })

            $('.image-gallery-wrapper-nav .next').on('click', function(){
                $('.image-gallery-wrapper').flexslider('next')
                return false;
            })
        }());


        // -------------------------------------------------------------
    //  clientSlider
    // -------------------------------------------------------------
    (function () {

        $('.clientSlider').owlCarousel({
            loop:true,
            margin:30,
            dots:false,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:4,
                }
            }
        })


        // Navigation 
        var owl = $('.clientSlider');
        owl.owlCarousel();

        // Go to the next item
        $('.clientSlider-nav .next').click(function () {
            owl.trigger('next.owl.carousel');
        })

        // Go to the previous item
        $('.clientSlider-nav .prev').click(function () {
            owl.trigger('prev.owl.carousel', [300]);
        });

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





}); 



