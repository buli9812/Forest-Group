const { src, dest, series, parallel, watch } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const kit = require('gulp-kit');
const browserSync = require('browser-sync').create();

const paths = {
	sass: './src/sass/**/*.scss',
	html: './html/**/*.kit',
	js: './src/js/**/*.js',
	conimg: './src/img/*',
	sassDest: './dist/css',
	jsDest: './dist/js',
	conimgDest: './dist/img',
	dist: './dist',
};

function sassCompiler(done) {
	src(paths.sass)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cssnano())
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write())
		.pipe(dest(paths.sassDest));
	done();
}

function javaScript(done) {
	src(paths.js)
		.pipe(sourcemaps.init())
		.pipe(babel({ presets: ['@babel/env'] }))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write())
		.pipe(dest(paths.jsDest));
	done();
}

function convertImages(done) {
	src(paths.conimg).pipe(imagemin()).pipe(dest(paths.conimgDest));
	done();
}
function handleKits(done) {
	src(paths.html).pipe(kit()).pipe(dest('./'));
	done();
}
function cleanStuff(done) {
	src(paths.dist, { read: false }).pipe(clean());
	done();
}

function startBrowserSync(done) {
	browserSync.init({
		server: {
			baseDir: './',
		},
	});
	done();
}

const watchForChanges = done => {
	watch('./*.html').on('change', browserSync.reload);
	watch([paths.html, paths.sass, paths.js], parallel(handleKits, sassCompiler, javaScript)).on('change', browserSync.reload);
	watch(paths.conimg, convertImages).on('change', browserSync.reload);
	done();
};

const mainfunctions = parallel(handleKits, sassCompiler, javaScript, convertImages);
exports.default = series(mainfunctions, startBrowserSync, watchForChanges);
exports.cleanStuff = cleanStuff;
