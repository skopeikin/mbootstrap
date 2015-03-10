//
//
// Magento-Bootstrap theme resources, dependies and tasks
// --------------------------------------------------
var settings = {
    path: {},
    theme: {},
    themeOptions: {
        packageName:    'mbootstrap',
        themeName:      'default'
    }
};

module.exports = function(config) {

    return settings.theme = {
        source: {
            css: {},
            js: {
                bootstrap: {
                    concat: 'bootstrap.js',
                    min:    'bootstrap.min.js',
                    dir:    config.path.skin.dir + settings.themeOptions.packageName + '/' + settings.themeOptions.themeName + '/bootstrap/assets/javascripts/bootstrap/'
                }
            }
        },

        build: {
            css: {},
            js: {
                dir: config.path.build.js.dir + settings.themeOptions.packageName + '/' + settings.themeOptions.themeName + '/'
            }
        }
    }
};
