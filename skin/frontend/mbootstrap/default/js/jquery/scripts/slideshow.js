jQuery(document).ready(function ($) {
    // ==============================================
    // UI Pattern - Slideshow
    // ==============================================
    if( $('.slideshow-container .slideshow').length ) {
        $('.slideshow-container .slideshow')
            .cycle({
                slides: '> li',
                pager: '.slideshow-pager',
                pagerTemplate: '<span class="pager-box"></span>',
                speed: 600,
                pauseOnHover: true,
                swipe: true,
                prev: '.slideshow-prev',
                next: '.slideshow-next',
                fx: 'scrollHorz',
                log: false
            })
    }
});
