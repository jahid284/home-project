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
            contentWrapper: '.content-wrapper',
            position: 'hippo-offcanvas-left', // class name
            // opener         : 'st-menu-open',            // class name
            effect: 'slide-in-on-top', // class name
            closeButton: '#off-canvas-close-btn',
            menuWrapper: '.offcanvas-menu', // class name below-pusher
            documentPusher: '.offcanvas-pusher'
        });
    }());



    // -----------------------------------------------------------------
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    // ------------------------------------------------------------------

    (function () {
        $('a.page-scroll').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }());



    // ------------------------------------------------------------------
    // sticky menu
    // ------------------------------------------------------------------
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("sticky-nav");
        } else {
            $(".navbar-fixed-top").removeClass("sticky-nav");
        }
    });



    // -------------------------------------------------------------
    // dropdown hover
    // -------------------------------------------------------------
    (function () {
        $(".dropdown").hover(
                function () {
                    $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
                    $(this).toggleClass('open');
                },
                function () {
                    $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
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
    // Revoulation Slider   {slidertwentyfive}
    // -------------------------------------------------------------
        (function () {
            $('.tp-banner-twentyfive').revolution({
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


    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------
 
    $('.progress-item').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).unbind('inview');
        }
    });



    // -------------------------------------------------------------
    // Counter
    // -------------------------------------------------------------

    (function () {

        $('.chart-four').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#fff',
            trackColor: '#ad76c0',
            scaleColor: '#ad76c0',
            lineWidth: 7,
            size: 125,
            scaleLength: 1,
            lineCap: 'square',
            animate: 3000,
            onStep: function (from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());





    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------
    (function () {

        $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');

        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').on('click', function () {
            $("html, body").animate({scrollTop: 0}, 600);
            return false;
        });

    }());




    








}); // JQuery end
