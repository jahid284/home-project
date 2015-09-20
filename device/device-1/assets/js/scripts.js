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
    // Revoulation Slider  
    // -------------------------------------------------------------
        (function () {
            $('.tp-banner-twentythree').revolution({
                delay:7000,
                startwidth:1170,
                startheight:1000,
                hideThumbs:10,
                fullWidth:"on",
                forceFullWidth:"on",
                onHoverStop:"off",
                navigationType:"none",
                navigationStyle:"preview1",
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




    // -------------------------------------------------------------
    //  gallery-slider
    // -------------------------------------------------------------

        (function () {

            $('.gallery-slider').owlCarousel({
                loop:true,
                dots:false,
                autoplay:true,
                responsive:{
                    0:{
                        items:1,
                    },
                    600:{
                        items:3,
                    },
                    1000:{
                        items:4,
                    }, 
                }
            })

            // Navigation 
            var owl = $('.gallery-slider');
            owl.owlCarousel();

            // Go to the next item
            $('.gallery-slider-nav .next').click(function () {
                owl.trigger('next.owl.carousel');
            })

            // Go to the previous item
            $('.gallery-slider-nav .prev').click(function () {
                owl.trigger('prev.owl.carousel', [300]);
            });

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

