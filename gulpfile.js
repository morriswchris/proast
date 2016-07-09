"use strict";

var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var connect = require("gulp-connect");

gulp.task("default", ["es6-compile", "html", "connect", "watch"], function() {});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('src/*.html')
    .pipe(gulp.dest('app/'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['html']);
  gulp.watch(['./src/**/*.js'], ['es6-compile']);
});

gulp.task("es6-compile", function(cb){
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("app/js"))
    .pipe(connect.reload());
});
