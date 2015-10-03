'use strict';

var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    http = require('http'),
    st = require('st');

/*gulp.task('less', function() {
  gulp.src('app/styles/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/styles'))
    .pipe(livereload());
});*/

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('index.html',['server']);
});

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname, index: 'index.html', cache: true })
  ).listen(8080, done);
});