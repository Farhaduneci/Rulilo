const gulp = require('gulp')
const path = require('path')
const sass = require('gulp-sass')

gulp.task('sass', () => {
    return gulp 
        .src([
            path.resolve(__dirname, 'src/scss/*.scss'),
            path.resolve(__dirname, 'node_modules/bootstrap/scss/bootstrap.scss')
        ])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
})

gulp.task('watch', () => {
    gulp.watch(
        path.resolve(__dirname, 'src/scss/style.scss'), gulp.series('sass')
    );
})

gulp.task('image', () => {
    return gulp
        .src([
            path.resolve(__dirname, 'src/image/*.svg'),
            path.resolve(__dirname, 'src/image/*.png')
        ])
        .pipe(gulp.dest('build/src/image'))
})

gulp.task('default', gulp.series('sass', 'image', 'watch'));