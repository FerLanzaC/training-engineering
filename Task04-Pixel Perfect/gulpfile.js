const gulp = require('gulp');

gulp.task('task',()=>
    gulp.src('stylesTask4.scss')
    .pipe(gulp.dest('stylesTask4.css'))
);

gulp.watch();