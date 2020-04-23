import gulp from 'gulp';
import runSequence from 'run-sequence';
import {get as browserSync} from 'browser-sync';
import watch from 'gulp-watch';

const bs = browserSync('server');

gulp.task('watch', () => {
  global.watch = true;

  watch('mailTemplates/**/*.styl', () => {
    runSequence(['mailStyles'], () => runSequence('mailTemplates', bs.reload));
  });
  watch(['mailTemplates/**/*.jade'], () => runSequence('mailTemplates', bs.reload));
  watch('mailTemplates/**/images/*', () => runSequence('mailCopy', bs.reload));
});
