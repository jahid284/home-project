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



    // -------------------------------------------------------------
    // PrettyPhoto
    // -------------------------------------------------------------

        (function () {

            jQuery("a[data-gal^='prettyPhoto']").prettyPhoto(); 

        }());



    // -------------------------------------------------------------
    // flexslider
    // -------------------------------------------------------------
        (function () {

            $('.flexslider').flexslider({
                animation: "slide",
                controlNav: "thumbnails",
                directionNav: false
            });
            
        }());



    // ------------------------------------------------------------------
    // Revulation Slider   {sliderfive}
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



    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------
 
        $('.progress-wrapper').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $.each($('div.progress-bar'),function(){
                    $(this).css('width', $(this).attr('aria-valuenow')+'%');
                });
                $(this).off('inview');
            }
        });



    // -------------------------------------------------------------
    //  clientSlider
    // -------------------------------------------------------------
        (function () {

            $('.clientSlider').owlCarousel({
                margin: 60,
                dots:false,
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



    // ----------------------------------------------------------------
    // gallery-Slider
    // ----------------------------------------------------------------
        (function () {
            $('.gallery-wrapper').owlCarousel({
                    margin:1,
                    nav:false,
                    autoplay:true,   
                    autoplaySpeed:150,
                    dots:false,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items:5
                        }
                    }
                })
        }());





    // -------------------------------------------------------------
    // testimonial-Slider
    // -------------------------------------------------------------
        (function () {

            $('.testimonial-wrapper').flexslider({
                animation: "slide",
                controlNav: "thumbnails",
                directionNav: false
            })

            // Navigation 
            $('.prev').on('click', function(){
                $('.testimonial-wrapper').flexslider('prev')
                return false;
            })

            $('.next').on('click', function(){
                $('.testimonial-wrapper').flexslider('next')
                return false;
            })
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
                lineWidth: 8,
                size: 150,
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





    // -------------------------------------------------------------
    //  Masonary
    // -------------------------------------------------------------
        
       $(window).load(function(){
            $('#masonry-wrapper').masonry({
              // options...
              itemSelector: '.grid-item',
            });

       });