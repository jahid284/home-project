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





    //-------------------------------------------------------
    // creative-counter
    //-------------------------------------------------------
    $('.creative-counter').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
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






    // -------------------------------------------------------------
    // Twitter
    // -------------------------------------------------------------
    (function () {
        var twitterWidgetConfig = {
            id: "567185781790228482", //put your Widget ID here
            domId: "twitterFeed",
            maxTweets: 3,
            enableLinks: true,
            showUser: false,
            showTime: true,
            showInteraction: false,
            customCallback: handleTweets
        };

        twitterFetcher.fetch(twitterWidgetConfig);

        function handleTweets(tweets) {
            var x = tweets.length;
            var n = 0;
            var html = "";
            while (n < x) {
                html += '<div class="item">' + tweets[n] +
                    "</div>";
                n++
            }
            $(".twitter-widget").html(html);
            $(".twitter_retweet_icon").html(
                '<i class="fa fa-retweet"></i>');
            $(".twitter_reply_icon").html(
                '<i class="fa fa-reply"></i>');
            $(".twitter_fav_icon").html(
                '<i class="fa fa-star"></i>');
            $(".twitter-widget").owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                dots:false,
                nav:true,
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ]
            });
        }
    }());






    // -------------------------------------------------------------
    //  clientOneSlider
    // -------------------------------------------------------------
    (function () {

        $('.clientOneSlider').owlCarousel({
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
        var owl = $('.clientOneSlider');
        owl.owlCarousel();

        // Go to the next item
        $('.clientOneSlider-nav .next').click(function () {
            owl.trigger('next.owl.carousel');
        })

        // Go to the previous item
        $('.clientOneSlider-nav .prev').click(function () {
            owl.trigger('prev.owl.carousel', [300]);
        });

    }());



    // -------------------------------------------------------------
    // tooltip
    // -------------------------------------------------------------

    (function () {

        $('[data-toggle="tooltip"]').tooltip()

    }());




    // -------------------------------------------------------------
    // PrettyPhoto
    // -------------------------------------------------------------
    (function () {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto(); 
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


$(document).on('click', '.m-menu .dropdown-menu', function(e) {
  e.stopPropagation()
})