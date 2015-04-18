/**
 * Responsive Mini Search form
 * */
jQuery(document).ready(function ($) {
    var tablet = {
        landscape: {
            query:      'screen and (min-width: 768px) and (max-width: 992px)',
            className:  'search-mini_tablet-landscape'
        }
    };
    var $form = $("#search_mini_form");

    var matchmedia = mm = function(query, callback, usePolyfill) {
        var host = {};
        var isMatchMediaSupported = !!(window && window.matchMedia) && !usePolyfill;
        if(isMatchMediaSupported) {
            var res = window.matchMedia(query);
            callback.apply(host, [res.matches, res.media]);
            res.addListener(function(changed) {
                callback.apply(host, [changed.matches, changed.media]);
            });
        } else {
            console.log("Sorry but your browser do not support 'matchmedia' feature. Check it on http://caniuse.com/#feat=matchmedia");
        }
    };

    // Programm
    // ----------
    function createSearchBuffer(){
        var bufferId = 'search-mini_tablet-landscape-buffer';

        // check is buffer created
        if( !$("#" + bufferId).length ) {
            var $navbar = $("#i-navbar");
            var $buffer = $("<div/>", {id: bufferId});

            $navbar.after( $buffer );
        }
    };

    function moveSearchToBuffer(){
        var bufferId = 'search-mini_tablet-landscape-buffer';

        $form.addClass( tablet.landscape.className );
        $form.appendTo( $("#" + bufferId) );
    };
    function moveSearchToDefault(){
        var defaultDiv = $(".js-navbar-main-collapse");

        $form.removeClass( tablet.landscape.className );
        $form.appendTo( defaultDiv );
    };

    mm(tablet.landscape.query, function(match) {
        // match = true or false

        if(match) {
            createSearchBuffer();
            moveSearchToBuffer();
        } else {
            moveSearchToDefault();
        }
    });
});
