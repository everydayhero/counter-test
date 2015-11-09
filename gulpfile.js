'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

var src = {};
var exclude = [
  '!./**/*test**',
  '!./__tests__/**',
  '!./test/**',
  '!./node_modules/**',
  '!./bin/**',
  '!./gulp*',
  '!./dist/**'
];

gulp.task('build', function() {
  src.scripts = ['./**/*.js'].concat(exclude);

  var bundler = browserify({
    entries: ['./src/application.js'],
    transform: ['babelify']
  });

  return bundler
    .bundle()
    .on('error', function(err) { console.log(err) })
    .pipe(source('application.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('default', ['build']);
