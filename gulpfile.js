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
// $ sudo npm install -g gulp
// $ npm install gulp --save-dev
// $ npm install gulp-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-cache --save-dev
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
gulp.task('build-theme-mbootstrap-scripts', require('./skin/frontend/mbootstrap/default/gulp/tasks/scripts')(gulp, plugins, config));


// Tasks
// --------------------------------------------------
// -------------------------


gulp.task('dist', function(){
//    console.log(cfg.theme.base);
});
gulp.task('build', ['dist']);

//
// Default Task
gulp.task('default', ['build']);
