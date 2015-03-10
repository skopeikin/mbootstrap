module.exports = function (gulp, plugins, config) {
    return function () {

        gulp.src( config.theme.base.source.js.global.files )
            .pipe(plugins.concat( config.path.build.js.global.concat ))
            .pipe(gulp.dest( config.theme.base.build.js.dir ))
            .pipe(plugins.rename( config.path.build.js.global.min ))
            .pipe(plugins.uglify())
            .pipe(gulp.dest( config.theme.base.build.js.dir ));

        gulp.src( config.theme.base.source.js.catalog.files )
            .pipe(plugins.concat( config.path.build.js.catalog.concat ))
            .pipe(gulp.dest( config.theme.base.build.js.dir ))
            .pipe(plugins.rename( config.path.build.js.catalog.min ))
            .pipe(plugins.uglify())
            .pipe(gulp.dest( config.theme.base.build.js.dir ));


        gulp.src( config.theme.base.source.js.product.simple.files )
            .pipe(plugins.concat( config.path.build.js.product.simple.concat ))
            .pipe(gulp.dest( config.theme.base.build.js.dir ))
            .pipe(plugins.rename( config.path.build.js.product.simple.min ))
            .pipe(plugins.uglify())
            .pipe(gulp.dest( config.theme.base.build.js.dir ));

        gulp.src( config.theme.base.source.js.product.configurable.files )
            .pipe(plugins.concat( config.path.build.js.product.configurable.concat ))
            .pipe(gulp.dest( config.theme.base.build.js.dir ))
            .pipe(plugins.rename( config.path.build.js.product.configurable.min ))
            .pipe(plugins.uglify())
            .pipe(gulp.dest( config.theme.base.build.js.dir ));

        gulp.src( config.theme.base.source.js.product.bundle.files )
            .pipe(plugins.concat( config.path.build.js.product.bundle.concat ))
            .pipe(gulp.dest( config.theme.base.build.js.dir ))
            .pipe(plugins.rename( config.path.build.js.product.bundle.min ))
            .pipe(plugins.uglify())
            .pipe(gulp.dest( config.theme.base.build.js.dir ));
    };
};
