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
                    dir:    config.path.skin.dir + themeOptions.package + '/' + themeOptions.theme + '/bootstrap/assets/javascripts/bootstrap/'
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
