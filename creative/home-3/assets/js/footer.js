jQuery(function ($) {

    'use strict';


    // -------------------------------------------------------------
    // Footer Three Twitter Feed
    // -------------------------------------------------------------
    (function () {

        var twitterConfig = {
            id: "567185781790228482", //put your Widget ID here
            domId: "twitterWidget",
            maxTweets: 3,
            enableLinks: true,
            showUser: true,
            showTime: true,
            showInteraction: false
        };

        twitterFetcher.fetch(twitterConfig);

    }());



}); // JQuery end
