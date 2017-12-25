const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const minifyCSS = require('gulp-minify-css');
const clean = require('gulp-clean');
const rename = require('gulp-rename');

const browserSync = require('browser-sync').create();

const scripts = require('./scripts');
const libs = require('./libs');

var devMode = false;

gulp.task('css', function() {
    gulp.src('./src/css/**/*.css')
        .pipe(concat('style.css'))
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('lib', function() {
    gulp.src(libs)
        .pipe(babel({
            presets: ['latest']
        }))
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/lib'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', function() {
    gulp.src(scripts)
        .pipe(babel({
            presets: ['latest']
        }))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', function() {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
    gulp.src('./src/js/**/*.html')
		.pipe(rename({dirname: ''}))
        .pipe(gulp.dest('dist/templates'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('clean', function() {
    gulp.src(['./dist/css', './dist/js'], {read: false})
        .pipe(clean());
});

gulp.task('build', function() {
    gulp.start(['css','lib','js', 'html'])
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        open: true,
        port : 8080,
        server: {
            baseDir: 'dist',
        }
    });
});

gulp.task('start', function() {
    devMode = true;
    gulp.start(['build', 'browser-sync']);
    gulp.watch(['./src/css/**/*.css'], ['css']);
    gulp.watch(['./src/js/**/*.js'], ['js']);
    gulp.watch(['./src/**/*.html'], ['html']);
});
