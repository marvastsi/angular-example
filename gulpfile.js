var gulp = require("gulp"),
    runSequence = require("run-sequence"), 
    webserver = require("gulp-webserver"),
    del = require("del");

var root = __dirname;

var config = {
  files: {
    source: [
      root.concat('/app/*'),
      root.concat('/app/**/*')
    ],
    bower: root.concat('/bower_components/**/*'),
    build: root.concat('/dist/**')
  },

  paths: {
    bower: root.concat('/dist/bower_components'),
    build: root.concat('/dist')
  },
  
  server: {
    livereload: true,
    port: 8000,
    open: true
  }
};

gulp.task('default', ['build']);

gulp.task('build', function (done) {
  return runSequence('clear', ['copy', 'copy:bower'], done);
});

gulp.task('clear', function(){
  del.sync(config.files.build);
});

gulp.task('copy', function(){
  return gulp.src(config.files.source)
  .pipe(gulp.dest(config.paths.build));
});

gulp.task('copy:bower', function(){
  return gulp.src(config.files.bower)
  .pipe(gulp.dest(config.paths.bower));
});

gulp.task('server', ['build'], function () {  
  return gulp.src(config.paths.build)
      .pipe(webserver(config.server));
});

gulp.task('watch', function() {
    gulp.watch(config.files.source, ['copy']);
});

gulp.task('dev', ['server', 'watch']);