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
gulp.task('build-base-scripts', require('./gulp/theme/base/tasks/scripts')(gulp, plugins, config));

// Magento-Bootstrap Theme
// -------------------------
config.theme.mbootstrap = require('./skin/frontend/mbootstrap/default/gulp/mbootstrap.js')(config);
gulp.task('watch-mbootstrap', require('./skin/frontend/mbootstrap/default/gulp/tasks/watch')(gulp, plugins, config));
gulp.task('build-mbootstrap-scripts', require('./skin/frontend/mbootstrap/default/gulp/tasks/scripts')(gulp, plugins, config));
gulp.task('build-mbootstrap-styles', require('./skin/frontend/mbootstrap/default/gulp/tasks/sass')(gulp, plugins, config));
gulp.task('build-mbootstrap-images', require('./skin/frontend/mbootstrap/default/gulp/tasks/imagemin')(gulp, plugins, config));


// Tasks
// --------------------------------------------------
gulp.task('build-mbootstrap', [
    'build-base-scripts',
    'build-mbootstrap-scripts', 'build-mbootstrap-styles',
    'build-mbootstrap-images'
]);

//
// Default Task
// -------------------------
gulp.task('build', ['build-mbootstrap']);
gulp.task('default', ['build']);
