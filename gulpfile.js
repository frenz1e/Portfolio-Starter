'use strict';

var gulp = require('gulp');

// load gulp plugins
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('sass', function () {
    return gulp.src(['sass/*.scss'])
        .pipe($.sass({
            style: 'expanded',
            errLogToConsole: true
        }))
        .pipe($.autoprefixer('last 2 version',
            '> 1%',
            'ios 6',
            'android 4'))
        .pipe($.minifyCss())
        .pipe(gulp.dest('public/css'))
        .pipe(reload({stream: true}));
});

gulp.task('js', function () {
    return gulp.src([
            'public/js/*.js'
        ])
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe($.uglify())
        .pipe($.rename('main.min.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost:3030"
    });
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch(['views/*.ejs','public/img/**/*.*']).on('change', reload);
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('public/js/**/*.js', ['js']);
});