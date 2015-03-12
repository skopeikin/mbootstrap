module.exports = function (gulp, plugins, config) {
    return function () {

        var theme = config.theme.mbootstrap;

        gulp.watch([
            theme.source.js.jquery.files,
            theme.source.js.bootstrap.files,
            theme.source.js.jquery.scripts.files
        ], ['build-theme-mbootstrap-scripts']);

        gulp.watch(theme.source.scss.files, ['build-theme-mbootstrap-styles']);
    };
};
