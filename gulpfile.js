"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    gutil = require('gulp-util'),
    minify = require('gulp-minify-css'),
    merge = require('merge-stream'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    config = require('./gulp/config');

gulp.task('clean', function (done) {
    gulp.src(['dist'], {
        read: false
    })
        .pipe(clean())
        .on('end', function () {
            gutil.log('All cleaned!');
        });
    done();
});

gulp.task('clean-js', function (done) {
    gulp.src(config.files.js, {
        read: false
    })
        .pipe(clean());
    done();
});

gulp.task('clean-css', function (done) {
    gulp.src(config.files.css, {
        read: false
    })
        .pipe(clean());
    done();
});

gulp.task('concat-minify-js', function (done) {
    gulp.src(config.vendors.js)
        .pipe(concat('build'))
        .pipe(config.env === 'production' ? uglify() : gutil.noop())
        .pipe(rename({
            extname: ".min.js"
        }))
        .pipe(gulp.dest(config.dirs.js))
        .pipe(reload({stream: true}))
        .on('end', function () {
            gutil.log('Scripts concatenated and merged!');
        });
    done();
});

gulp.task('concat-minify-css', function (done) {
    var sassStream = gulp.src(config.components.sass)
        .pipe(sass({
            errLogToConsole: true
        }));
    var cssStream = gulp.src(config.vendors.css);
    var mergedStream = merge(sassStream, cssStream)
        .pipe(concat('build.min.css'))
        .pipe(config.env === 'production' ? minify() : gutil.noop())
        .pipe(gulp.dest(config.dirs.css))
        .pipe(reload({stream: true}))
        .on('end', function () {
            gutil.log('Styles concatenated and merged!');
        });

    done();

    return mergedStream;
});

gulp.task('concat-minify-html', function (done) {
    gulp.src(config.components.html)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.dirs.html))
        .pipe(reload({stream: true}))
        .on('end', function () {
            gutil.log('HTML concatenated and merged!');
        });
    done();
});

gulp.task('compress-images', function (done) {
    gulp.src(config.components.img)
        .pipe(imagemin())
        .pipe(gulp.dest(config.dirs.img));
    done();
});

gulp.task('watch', function (done) {
    browserSync.init({
        server:  {
            baseDir: './'
        },
        browser: []
    });

    gulp.watch('./src/scss/**/*.scss', gulp.series('concat-minify-css'));
    gulp.watch('./assets/js/*.js', gulp.series('concat-minify-js'));
    gulp.watch('*.html', gulp.series('concat-minify-html'));
    gulp.watch('./assets/img/*', gulp.series('compress-images'));
    done();
});

gulp.task('default', gulp.series('concat-minify-css',
    gulp.parallel('concat-minify-js', 'concat-minify-html', 'compress-images', 'watch')
));
