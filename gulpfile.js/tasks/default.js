module.exports = function (gulp, plugins, config, helpers) {
  var tasks = ['templates', 'scripts', 'styles', 'images', 'icons', 'fonts', 'media'];

  gulp.task('build', ['clean'], function () {
    return plugins.runSequence(tasks);
  });

  gulp.task('watch', function () {
    tasks.forEach(function (task) {
      gulp.watch(config.source + '/' + task + '/**/*', [task]);
    });
  });

  gulp.task('default', function () {
    return plugins.runSequence('build', 'watch');
  });
};
