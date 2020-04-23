import gulp from 'gulp';

gulp.task('mailCopy', () => (
	gulp.src('mailTemplates/**/images/*')
		.pipe(gulp.dest('mailBuild'))
));
