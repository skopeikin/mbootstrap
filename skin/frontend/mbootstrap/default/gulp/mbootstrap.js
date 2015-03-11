//
//
// Magento-Bootstrap theme resources, dependies and tasks
// --------------------------------------------------
var themeOptions = {
    "package":  "mbootstrap",
    "theme":    "default"
};

module.exports = function(config) {

    return {
        source: {
            scss: {
                concat: 'mbootstrap.css',
                min:    'mbootstrap.min.css',
                files:  config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/' + 'scss/mbootstrap.scss'
            },
            js: {
                bootstrap: {
                    concat: 'bootstrap.js',
                    min:    'bootstrap.min.js',
                    dir:    config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/bootstrap/assets/javascripts/bootstrap/',
                    files: [
                        config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/bootstrap/assets/javascripts/bootstrap/' + 'affix.js'
                        ,config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/bootstrap/assets/javascripts/bootstrap/' + 'alert.js'
                        ,config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/bootstrap/assets/javascripts/bootstrap/' + 'button.js'
                        ,config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/bootstrap/assets/javascripts/bootstrap/' + 'carousel.js'
                        ,config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/bootstrap/assets/javascripts/bootstrap/' + 'collapse.js'
                        ,config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/bootstrap/assets/javascripts/bootstrap/' + 'dropdown.js'
                        ,config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/bootstrap/assets/javascripts/bootstrap/' + 'tab.js'
                        ,config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/bootstrap/assets/javascripts/bootstrap/' + 'transition.js'
                        ,config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/bootstrap/assets/javascripts/bootstrap/' + 'scrollspy.js'
                        ,config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/bootstrap/assets/javascripts/bootstrap/' + 'modal.js'
                        ,config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/bootstrap/assets/javascripts/bootstrap/' + 'tooltip.js'
                        ,config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/bootstrap/assets/javascripts/bootstrap/' + 'popover.js'
                    ]
                },
                jquery: {
                    concat: 'jquery.js',
                    min:    'jquery.min.js',
                    files:  [
                        config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/js/jquery/jquery.js',
                        config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/js/jquery/jquery.noConflict.js',
                    ],

                    plugins: {
                        files: []
                    },
                    scripts: {
                        concat: 'jquery.scripts.js',
                        min:    'jquery.scripts.min.js',
                        files: [
                            config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/js/jquery/scripts/magento-to-bootstrap-navigation.js',
                            config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/js/jquery/scripts/prototype-bootstrap-fix.js',
                        ]
                    }
                }
            }
        },

        build: {
            css: {
                dir: config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/' + 'build/css/'
            },
            js: {
                dir: config.path.build.js.dir + themeOptions.package + '/' + themeOptions.theme + '/'
            }
        },

        plugins: {
            autoprefixer: {
                cascade: false
            },
            sass: {
                errLogToConsole: true
            }
        }
    }
};
