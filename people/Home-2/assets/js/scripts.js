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
    // Revulation Slider   {slidertwo}
    // ------------------------------------------------------------------

        (function () {
            $('.tp-banner-two').revolution({
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



    //-------------------------------------------------------
    // counter Ten
    //-------------------------------------------------------
     (function () {
            $('.counterTen').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
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

      }());


    // -------------------------------------------------------------
    // PrettyPhoto
    // -------------------------------------------------------------

    (function () {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto(); 
    }());




     // -------------------------------------------------------------
    // Counter (Chart)
    // -------------------------------------------------------------

    (function () {


        $('.chart-one').easyPieChart({
            //your configuration goes here

            easing: 'easeOut',
            delay: 3000,
            barColor: '#fff',
            trackColor: '#659ca9',
            lineWidth: 8,
            size: 140,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(785);
            }
        });
        $('.chart-two').easyPieChart({
            //your configuration goes here

            easing: 'easeOut',
            delay: 3000,
            barColor: '#fff',
            trackColor: '#659ca9',
            lineWidth: 8,
            size: 140,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(623);
            }
        });

        $('.chart-three').easyPieChart({
            //your configuration goes here

            easing: 'easeOut',
            delay: 3000,
            barColor: '#fff',
            trackColor: '#659ca9',
            lineWidth: 8,
            size: 140,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(519);
            }
        });

        $('.chart-four').easyPieChart({
            //your configuration goes here

            easing: 'easeOut',
            delay: 3000,
            barColor: '#fff',
            trackColor: '#659ca9',
            lineWidth: 8,
            size: 140,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(246);
            }
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
        $('.prev').on('click', function(){
            $('.testimonialSlider').flexslider('prev')
            return false;
        })

        $('.next').on('click', function(){
            $('.testimonialSlider').flexslider('next')
            return false;
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
