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

            $("a[rel^='prettyPhoto']").prettyPhoto();

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



    // -------------------------------------------------------------
    //  clientSlider
    // -------------------------------------------------------------
        (function () {

            $('.clientSlider').owlCarousel({
                margin: 60,
                dots:true,
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


    // -------------------------------------------------------------
    // Footer Flickrfeed #photoStreamOne
    // -------------------------------------------------------------

    (function () {

        $('#photoStreamOne').jflickrfeed({
            limit: 8,
            qstrings: {
                id: '52617155@N08'
            },
            itemTemplate: '<li>'+
                            '<a href="{{image}}" title="{{title}}">' +
                                '<img src="{{image_s}}" alt="{{title}}" />' +
                            '</a>' +
                          '</li>'
        });

    }());



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


}); // JQuery end





