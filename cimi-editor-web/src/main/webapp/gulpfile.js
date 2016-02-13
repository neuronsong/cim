'use strict';
var gulp = require('gulp');
var del = require('del'); //Cleans directories
var typescript = require('gulp-typescript'); //Allows compilation of .ts files for Gulp
var tscConfig = require('./tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');
var tslint = require('gulp-tslint');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass'); // Adds Sass compilation tools
var source = {
    styles: 'app/styles/main.scss',
    scripts: [
        'app/**/*.ts'
    ]
};
var destination = {
    all: 'dist/**/*',
    scripts: 'dist/app',
    styles: 'dist/app/assets/styles'
};
// clean the contents of the distribution directory
gulp.task('clean', function () {
    del.sync(destination.all); // Delete everything in 'dist'
});
// copy static assets (i.e., non TypeScript compiled source)
gulp.task('copy:assets', ['clean'], function () {
    return gulp.src(['!app/assets/styles/**/*', '!app/**/*.ts', 'app/**/*', 'index.html'], { base: './' })
        .pipe(gulp.dest('dist'));
});
// copy dependencies
// remember to update this every time you add a library
gulp.task('copy:libs', function () {
    gulp.src([
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/router.dev.js'
    ])
        .pipe(gulp.dest('dist/lib'));
});
//linting
gulp.task('tslint', function () {
    gulp.src(source.scripts)
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});
// TypeScript compile
gulp.task('compile', function () {
    gulp.src(source.scripts)
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destination.scripts));
});
// Run browsersync for development
gulp.task('serve', ['build'], function () {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch(['app/**/*', 'index.html'], ['buildAndReload']);
    //gulp.watch(['app/assets/styles/**/*.scss'], ['sass']);
});
gulp.task('build', ['tslint', 'clean', 'compile', 'sass', 'copy:libs', 'copy:assets']);
gulp.task('buildAndReload', ['build'], browserSync.reload);
gulp.task('default', ['build']);
// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("app/assets/styles/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/app/assets/styles"))
        .pipe(browserSync.stream());
});
//# sourceMappingURL=gulpfile.js.map