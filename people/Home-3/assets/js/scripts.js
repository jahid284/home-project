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



// ------------------------------------------------------------------
    // Revulation Slider   {sliderthree}
    // ------------------------------------------------------------------

        (function () {
            $('.tp-banner-three').revolution({
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
    // PrettyPhoto
    // -------------------------------------------------------------

    (function () {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto(); 
    }());



// -------------------------------------------------------------
    //  Block Quote Slider 
    // -------------------------------------------------------------
    (function () {

        $('.blockquoteSlider').owlCarousel({
            loop:true,
            nav:false,
            margin: 0,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

    }());


// ----------------------------------------------------------------
    // portfolioSlider
    // ----------------------------------------------------------------

    (function () {
       
            $('.portfolioSlider').owlCarousel({
                stagePadding: 20,
                loop:true,
                margin:0,
                nav:false,
                dots:false,
                autoplay:true,
                responsive:{
                    0:{
                        items:0
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            })

    }());



    // ----------------------------------------------------------------
    // clientslider
    // ----------------------------------------------------------------

    (function () {
       
            $('.clientSlider').owlCarousel({
                loop:true,
                margin:45,
                nav:false,
                dots:false,
                autoplay:true,
                responsive:{
                    0:{
                        items:0
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:6
                    }
                }
            })

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
    //  footer-section twitter
    // -------------------------------------------------------------
    (function () {
        var twitterWidgetConfig = {
            id: "567185781790228482", //put your Widget ID here
            domId: "twitterWidgetFive",
            maxTweets: 2,
            enableLinks: true,
            showUser: true,
            showTime: true,
            showInteraction: false
        };

        twitterFetcher.fetch(twitterWidgetConfig);

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
