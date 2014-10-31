var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('bundle', function() {
  return gulp
    .src('src/**/*.js')
    .pipe(concat('angular-csrf.js'))
    .pipe(gulp.dest('dist'));
});