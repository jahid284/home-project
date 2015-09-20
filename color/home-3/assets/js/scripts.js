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
    // Revoulation Slider   {slidertwentyseven}
    // -------------------------------------------------------------
        (function () {
            $('.tp-banner-twentyseven').revolution({
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
    // testimonialSlider
    // -------------------------------------------------------------
    (function () {

        $('.testimonialSlider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false
        })

        // Navigation 
        $('.testimonialSlider-nav .prev').on('click', function(){
            $('.testimonialSlider').flexslider('prev')
            return false;
        })

        $('.testimonialSlider-nav .next').on('click', function(){
            $('.testimonialSlider').flexslider('next')
            return false;
        })
    }());




    // -------------------------------------------------------------
    // Counter Six (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-six-1st').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#31aae2',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 30,
            size: 148,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());



    (function () {

        $('.chart-six-2nd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#eb768c',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 30,
            size: 148,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart-six-3rd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#c183d6',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 30,
            size: 148,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart-six-4th').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#73c8b7',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 30,
            size: 148,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());

    // -------------------------------------------------------------
    //  clientThreeSlider
    // -------------------------------------------------------------
    (function () {

        $('.clientSlider').owlCarousel({
            loop:true,
            nav:false,
            margin: 90,
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







   


    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------
    (function () {

        $('body').append('<div id="toTop"><i class="fa fa-arrow-up"></i></div>');

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




// -------------------------------------------------------------
// Shuffle
// -------------------------------------------------------------

$(window).load(function() {
    /** this is come when complete page is fully loaded, including all frames, objects and images **/

    if ($('#gridWrapper').length > 0) {
     
        /* initialize shuffle plugin */
        var $grid = $('#gridWrapper');

        $grid.shuffle({
            itemSelector: '.portfolio-wrapper' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('#filter a').on('click', function (e) {
            e.preventDefault();

            // set active class
            $('#filter a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });
    }
});

