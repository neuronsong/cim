'use strict'

const gulp = require('gulp');
const del = require('del'); //Cleans directories
const typescript = require('gulp-typescript'); //Allows compilation of .ts files for Gulp
const tscConfig = require('./tsconfig.json'); //Pulls in TypeScript configuration files
const sourcemaps = require('gulp-sourcemaps'); //Generates sourcemaps
const tslint = require('gulp-tslint'); //Lints TypeScript
const browserSync = require('browser-sync').create(); //Creates a server object
const historyApiFallback = require('connect-history-api-fallback')
const sass = require('gulp-sass'); // Adds Sass compilation tools

const source = {
    styles: 'app/styles/main.scss', //includes references to all additional styles
    scripts : [
        'app/**/*.ts'
    ]
};

const destination = {
    all: 'dist/**/*',
    scripts: 'dist/app',
    styles: 'dist/app/assets/styles'
};

// clean the contents of the distribution directory
gulp.task('clean', () => {
    del.sync(destination.all); // Delete everything in 'dist'
});

// copy static assets (i.e., non TypeScript compiled source)
gulp.task('copy:assets', () => {
  return gulp.src([ '!app/assets/styles/**/*', '!app/**/*.ts', '!app/index.html', 'app/**/*' ], { base : './' })
    .pipe(gulp.dest('dist'))
});

// copy app index to dist root (to avoid rewriting)
gulp.task('copy:base', () => {
    return gulp.src([ 'app/index.html' ], { base : '' })
    .pipe(gulp.dest('dist'))
});

// copy dependencies
// remember to update this every time you add a library
gulp.task('copy:libs', ['clean'], () => {
    return gulp.src([
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/es6-shim/es6-shim.map',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system-polyfills.js.map',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/rxjs/bundles/Rx.js.map',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js'
    ])
    .pipe(gulp.dest('dist/lib'))
});

//linting
gulp.task('tslint', () => {
    return gulp.src(source.scripts)
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

// TypeScript compile
gulp.task('compile', () => {
    return gulp.src(source.scripts)
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination.scripts));
})

// Run browsersync for development
gulp.task('serve', ['build'], () => {
  browserSync.init({
    server: {
      baseDir: './dist',
      middleware: [ historyApiFallback() ]
    }
  });

  gulp.watch(['app/**/*', 'app/index.html'], ['buildAndReload']);
});

gulp.task('build', ['clean', 'compile', 'sass', 'copy:libs', 'copy:assets', 'copy:base']);
gulp.task('buildAndReload', ['build'], browserSync.reload);
gulp.task('default', ['build']);

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => {
    return gulp.src("app/assets/styles/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/app/assets/styles"))
        .pipe(browserSync.stream());
});
