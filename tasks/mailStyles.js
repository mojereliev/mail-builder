import gulp from 'gulp';
import plumber from 'gulp-plumber';

import stylus from 'gulp-stylus';
import errorHandler from 'gulp-plumber-error-handler';

gulp.task('mailStyles', () => (
	gulp.src('mailTemplates/**/styles.styl')
		.pipe(plumber({errorHandler: errorHandler('Error in \'styles\' task')}))
		.pipe(stylus({
  'include css': true
}))
		.pipe(gulp.dest('mailBuild'))
));
