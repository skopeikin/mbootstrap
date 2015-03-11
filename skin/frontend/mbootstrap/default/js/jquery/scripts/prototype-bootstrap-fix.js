//
// http://stackoverflow.com/a/24236506
jQuery(window).load(function() {
    // Defer this code until after the window 'load' event finishes firing
    setTimeout(function() {
        window.HTMLElement &&
            window.HTMLElement.prototype.hide &&
        delete window.HTMLElement.prototype.hide;
    }, 0);
});
