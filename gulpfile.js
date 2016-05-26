let gulp = require('gulp');
let sass = require('gulp-sass');


let input = './styles/sass/**/*.scss';
let output = './styles/stylesheets';
gulp.task('sass', () => {
	return gulp
		.src(input)
		.pipe(sass())
		.pipe(gulp.dest(output));
});

//Watch task
gulp.task('default', () => {
    gulp.watch(input, ['sass']);
});