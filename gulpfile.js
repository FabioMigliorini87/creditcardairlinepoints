var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var runSequence = require('run-sequence');
var argv = require('yargs').argv;
var minifycss = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var karma = require('gulp-karma');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var del = require('del');

var production = !!argv.production;

var testFiles = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/angular/angular.min.js',
  'bower_components/angular-route/angular-route.min.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'src/js/**/*.js',
  'test/unit/**/*.js',
];

var viewFiles = 'src/**/*.jade';

var scssFiles = 'src/css/**/*.scss';

var imageFiles = [
  'src/**/*.png',
  'src/**/*.jpeg',
  'src/**/*.jpg',
  'src/**/*.gif',
  'src/**/*.svg'
];

var jsFiles = 'src/js/**/*.js';

var karmaConfigPath = 'test/karma.conf.js';

var bowerCSSDeps = [
  'bower_components/bootstrap/dist/css/bootstrap.min.css'
];

var bowerJSDeps = [
  'jquery/dist/jquery.min.js',
  'angular/angular.min.js',
  'angular-route/angular-route.min.js',
  'angular-cookies/angular-cookies.min.js'
];

var notifyError = function (err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Beep"
  })(err);

  this.emit('end');
};

/* Clean the existing public dir */
gulp.task("build:clean", function(cb) {
  return del(["public/**/*"], cb);
});

/* Build views to public dir */
gulp.task('build:views', function() {
  return gulp.src(viewFiles, { base: 'src' })
    .pipe(plumber({
      errorHandler: notifyError
    }))
    .pipe( jade({ pretty: true }))
    .pipe(gulp.dest('public'));
});

/* Build styles to public dir */
gulp.task('build:styles', function() {
  return gulp.src(scssFiles, { base: 'src' })
    .pipe(plumber({
      errorHandler: notifyError
    }))
    .pipe(gulpif(!production, sourcemaps.init()))
      .pipe(sass().on('error', sass.logError))
      .pipe(rename({suffix: '.min'}))
    .pipe(gulpif(!production, sourcemaps.write({
      includeContent: false,
      sourceContent: '.'
    })))
    .pipe(gulpif(!production, sourcemaps.init()))
      .pipe(autoprefixer({browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'], cascade: true}))
      .pipe(gulpif(production, minifycss()))
    .pipe(gulpif(!production, sourcemaps.write({
      includeContent: false,
      sourceContent: '.'
    })))
    .pipe(gulp.dest('public'));
});

/* Build JS to public dir */
gulp.task('build:js', function() {
  return gulp.src(jsFiles, { base: 'src' })
    .pipe(plumber({
      errorHandler: notifyError
    }))
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify({ compress: {sequences: false, join_vars: false }}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulpif(!production, sourcemaps.write('../maps')))
    .pipe(gulp.dest('public/js'));
});

gulp.task('build:bower_js', function() {
  return gulp.src(bowerJSDeps, { cwd : 'bower_components/**'})
    .pipe(plumber())
    .pipe(gulpif(!production,sourcemaps.init()))
    .pipe(gulpif(!production, sourcemaps.write('../../maps/vendor')))
    .pipe(gulp.dest('public/js/vendor'));
});


gulp.task('build:bower_css', function() {
  return gulp.src(bowerCSSDeps)
    .pipe(plumber())
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(minifycss())
    .pipe(gulpif(!production, sourcemaps.write('../../maps/vendor')))
    .pipe(gulp.dest('public/css/vendor'));
});

/* Build images to public dir */
gulp.task('build:images', function() {
  return gulp.src(imageFiles, { base: 'src' })
    .pipe(plumber())
    .pipe(gulp.dest('public'));
});

gulp.task('test-watch', function() {
  // Be sure to return the stream
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: karmaConfigPath,
      action: 'start'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      notifyError(err);
      throw err;
    });
});

gulp.task('test', function() {
  // Be sure to return the stream
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: karmaConfigPath,
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      console.log('ERROR: ', err);
      // throw err;
    });
});

gulp.task('build:dev', function(cb) {
  return runSequence('build:clean', 'build', 'dev:server-start', function() {

    gulp.watch(viewFiles, ['build:views']);
    gulp.watch(jsFiles, ['build:js']);
    gulp.watch(scssFiles, ['build:styles']);
    gulp.watch(imageFiles, ['build:images']);

    cb();

  });
});

/* Dist Build */
gulp.task('build', function(cb) {
  return runSequence(
    'build:clean',
    ['build:views', 
      'build:styles', 
      'build:js',
      'build:bower_js', 
      'build:bower_css', 
      'build:images'], 
    function() {
      cb();
    });
});

gulp.task('dev:server-start', function() {
  gulp.src('public')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: '/'
    }));
});

gulp.task('default', ['build:dev']);