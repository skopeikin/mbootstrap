module.exports = function (gulp, plugins, config) {
    return function () {

        var theme = config.theme.mbootstrap;

        gulp.src( theme.source.scss.files )
//            .pipe(plugins.debug())

            // build styles
            .pipe(plugins.sourcemaps.init({debug:true}))
            .pipe(plugins.sass( theme.plugins.sass ))
            .pipe(plugins.autoprefixer( theme.plugins.autoprefixer ))
            .pipe(gulp.dest( theme.build.css.dir ))

            // create minify file
            .pipe(plugins.rename( theme.source.scss.min ))
            .pipe(plugins.minifyCss())
            .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest( theme.build.css.dir ));
    };
};
