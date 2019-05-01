'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var tinypng = require('gulp-tinypng-compress');
gulp.task('sass', function () {
  gulp.src('./assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      browsers: ["last 50 versions", "ie >= 9"],
      cascade: false
  }))
    .pipe(gulp.dest('./assets/css'))
    
});
gulp.task('tinypng', function () {
    gulp.src('./assets/img/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'tt1hQS2g74tplFVdw03NGQHfc41gqzGm',
            log: true,
            summarise:true
        }))
        .pipe(gulp.dest('./assets/img-compressed'));
});

gulp.task('watch', function () {
  gulp.watch('./assets/scss/*.scss', ['sass']);
  gulp.watch('./assets/img/*.{png,jpg,jpeg}',['tinypng'])
});