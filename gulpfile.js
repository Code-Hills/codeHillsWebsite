const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('src/assets/styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/assets/styles/css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: './src'
        },
        port: 3000,
        notify: false
    });

    gulp.watch('src/assets/styles/*.scss', gulp.series('sass'));
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/assets/js/*.js').on('change', browserSync.reload);
});

gulp.task('build', gulp.series('sass'));

gulp.task('default', gulp.series('sass', 'watch'));
