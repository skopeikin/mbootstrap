/*
* Convert default Magento navigation to Bootstrap navigation
 */
(function ( $ ) {

        $.fn.magentoBootstrapNavigation = function() {

        var menu = function(){
            var nav = $(this);

            nav.find(".parent")
                .addClass("dropdown")
                .hover(
                    function() { $( this ).addClass("open") },
                    function() { $( this ).removeClass("open") }
                )
//                .children("a").addClass("dropdown-toggle").attr("data-toggle", "dropdown")
                .children("a").addClass("dropdown-toggle")
                .append( ' <b class="caret"></b>')
                .next().addClass("dropdown-menu");
        };

        return this.each(menu);
    }
}( jQuery ));
