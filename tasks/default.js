import runSequence from 'run-sequence';
import gulp from 'gulp';

gulp.task('mailDev', () => (
	runSequence(
  [
    'mailStyles',
    'mailTemplates',
    'mailCopy'
  ],
		'server',
		'watch'
	)
));

gulp.task('mailBuild', () => (
	runSequence(
		'mailStyles',
    'mailTemplates',
		'mailCopy'
	)
));
