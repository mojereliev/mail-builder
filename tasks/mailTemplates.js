import gulp from 'gulp';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import jade from 'gulp-jade';
import prettify from 'gulp-jsbeautifier';
import inheritance from 'gulp-jade-inheritance';
import errorHandler from 'gulp-plumber-error-handler';
import getData from 'jade-get-data';

import inline from 'gulp-inline-css';

const data = {
  getData: getData('mailTemplates/data'),
  jv0: 'javascript:void(0);',
  timestamp: Date.now()
};

gulp.task('mailTemplates', () => (
	gulp.src('mailTemplates/**/index.jade')
		.pipe(plumber({errorHandler: errorHandler('Error in \'templates\' task')}))

		.pipe(gulpIf(global.watch, inheritance({basedir: 'mailTemplates'})))
    .pipe(jade({basedir: 'mailTemplates', data}))
		.pipe(gulpIf(process.env.PRETTIFY !== false, prettify({
  braceStyle: 'expand',
  indentWithTabs: true,
  indentInnerHtml: true,
  preserveNewlines: true,
  endWithNewline: true,
  wrapLineLength: 120,
  maxPreserveNewlines: 50,
  wrapAttributesIndentSize: 1,
  unformatted: ['use']
})))
		.pipe(gulp.dest('mailBuild'))
    .pipe(inline({
      applyStyleTags: true,
      applyLinkTags: true,
      applyTableAttributes: false,
      removeStyleTags: true,
      removeHtmlSelectors: true,
      removeLinkTags: true
    }))
    .pipe(gulp.dest('mailBuild'))
));
