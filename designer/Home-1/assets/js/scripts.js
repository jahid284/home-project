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



    // ------------------------------------------------------------------
    // Revulation Slider   
    // ------------------------------------------------------------------

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
    // PrettyPhoto
    // -------------------------------------------------------------

    (function () {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto(); 
    }());



    // -------------------------------------------------------------
    // Counter area
    // -------------------------------------------------------------

    (function () {

        $('.chart-Five').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#fff',
            trackColor: '#8ed2c4',
            scaleColor: false,
            lineWidth: 3,
            size: 150,
            scaleLength: 1,
            lineCap:'round',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


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



