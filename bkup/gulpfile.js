var gulp = require('gulp'),
    sass = require('gulp-sass');
    stylus = require('gulp-stylus'),
    minifyCSS = require('gulp-minify-css'),
    nib = require('nib'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    notify = require("gulp-notify")

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});



var paths = {
    scripts: [
        './js/jquery-1.12.2.js',
        './js/main.js'
    ],
    css: './content/sass/**/*.scss',
    html: '*.html'
};

gulp.task('stylus', function () {
    gulp.src('./css/styl/main.styl')
        .pipe(stylus({ error: true, use: [nib()] }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./css'))
        .pipe(notify("CSS OK!"));
});

gulp.task('sass', function() {
    gulp.src('./content/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./content/css'))
        .pipe(notify("CSS Sass OK!"))
        .on("error", notify.onError({
            Title:"title",
            Message:"error"
        }));
});

gulp.task('scripts', function () {
    return gulp.src(paths.scripts)
        .pipe(concat('./main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
        .pipe(notify("JS OK!"));
});

gulp.task('watch', function () {
    gulp.watch(paths.css, ['sass']);
    //gulp.watch(paths.scripts, ['scripts', browserSync.reload]);
   // gulp.watch(paths.html, ['', browserSync.reload]);
});

gulp.task('default', ['watch', 'sass', 'scripts']);