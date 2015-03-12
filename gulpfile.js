/*!
 * Magento-Bootstrap theme builder
 * http://
 * @author MavenEcommerce Inc.
 */
//
// --------------------------------------------------
// -------------------------


// Include gulp and plugins
// --------------------------------------------------
var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});


// Settings/Configuration
// --------------------------------------------------
var config = cfg = {
    root:       './',
    path:       {},
    theme:      {}
};
    config.path = require('./gulp/config.js')(config.root);


// Import themes settings and task list
// --------------------------------------------------
// Base Theme
// -------------------------
config.theme.base = require('./gulp/theme/base/base.js')(config);
gulp.task('build-theme-base-scripts', require('./gulp/theme/base/tasks/scripts')(gulp, plugins, config));

// Magento-Bootstrap Theme
// -------------------------
config.theme.mbootstrap = require('./skin/frontend/mbootstrap/default/gulp/mbootstrap.js')(config);
gulp.task('watch-theme-mbootstrap', require('./skin/frontend/mbootstrap/default/gulp/tasks/watch')(gulp, plugins, config));
gulp.task('build-theme-mbootstrap-scripts', require('./skin/frontend/mbootstrap/default/gulp/tasks/scripts')(gulp, plugins, config));
gulp.task('build-theme-mbootstrap-styles', require('./skin/frontend/mbootstrap/default/gulp/tasks/sass')(gulp, plugins, config));
gulp.task('build-theme-mbootstrap-images', require('./skin/frontend/mbootstrap/default/gulp/tasks/imagemin')(gulp, plugins, config));


// Tasks
// --------------------------------------------------
gulp.task('build-theme-mbootstrap', [
    'build-theme-base-scripts',
    'build-theme-mbootstrap-scripts', 'build-theme-mbootstrap-styles',
    'build-theme-mbootstrap-images'
]);

//
// Default Task
// -------------------------
gulp.task('build', ['build-theme-mbootstrap']);
gulp.task('default', ['build']);
