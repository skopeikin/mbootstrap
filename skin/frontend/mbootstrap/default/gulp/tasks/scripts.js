module.exports = function (gulp, plugins, config) {
    return function () {

        gulp.src( config.theme.mbootstrap.source.js.bootstrap.dir + "*.js" )
            .pipe(plugins.debug())
            .pipe(plugins.concat( config.theme.mbootstrap.source.js.bootstrap.concat ))
            .pipe(gulp.dest( config.theme.mbootstrap.build.js.dir ))
            .pipe(plugins.rename( config.theme.mbootstrap.source.js.bootstrap.min ))
            .pipe(plugins.uglify())
            .pipe(gulp.dest( config.theme.mbootstrap.build.js.dir ));
    };
};
