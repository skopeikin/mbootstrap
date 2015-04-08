module.exports = function (gulp, plugins, config) {
    return function () {

        var theme = config.theme.mbootstrap;

        var stream =
            gulp.src( theme.build.css.dir )
                // .pipe( plugins.using() )
                .pipe( plugins.clean() );

        return stream;
    }
};
