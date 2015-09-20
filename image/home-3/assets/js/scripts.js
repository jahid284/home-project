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
    // PrettyPhoto
    // -------------------------------------------------------------
    (function () {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto(); 
    }());



    // ------------------------------------------------------------------
    // Revulation Slider  
    // ------------------------------------------------------------------

        (function () {
            $('.tp-banner').revolution({
                delay:9000,
                startwidth:1170,
                startheight:1000,
                hideThumbs:10,
                fullWidth:"on",
                forceFullWidth:"on",
                onHoverStop:"off",
                navigationType:"none",
                navigationStyle:"preview4",
                spinner:"spinner5",
                hideTimerBar:"on"
            });
        }());




    // ----------------------------------------------------------------
    // owlcarousel   {gallery-five}
    // ----------------------------------------------------------------

    (function () {
        $('.gallery-five-wrapper').owlCarousel({
                margin:30,
                dots:false,
                autoplay:true,   
                autoplaySpeed:150,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:6
                    }
                }
            })

        }());




    





    





    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------
    (function(){

          $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');

            $(window).scroll(function () {
                if ($(this).scrollTop() != 0) {
                    $('#toTop').fadeIn();
                } else {
                    $('#toTop').fadeOut();
                }
            }); 

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());



}); // JQuery end
