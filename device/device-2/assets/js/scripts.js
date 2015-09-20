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
    // Revoulation Slider   {slidertwentytwo}
    // -------------------------------------------------------------
        (function () {
            $('.tp-banner-twentytwo').revolution({
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
    // Counter
    // -------------------------------------------------------------

        (function () {

            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                barColor: '#31aae2',
                trackColor: '#f9f9f9',
                scaleColor: false,
                lineWidth: 6,
                size: 115,
                scaleLength: 1,
                lineCap:'square',
                animate: 5000,
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }
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

