const gulp        = require('gulp')
const browserSync = require('browser-sync').create()
const sass        = require('gulp-sass')
const cleanCss    = require('gulp-clean-css')
const uglify      = require('gulp-uglify')
const browserify  = require('browserify')
const babel       = require('babelify')
const source      = require('vinyl-source-stream')
const buffer      = require('vinyl-buffer')
const util        = require('gulp-util')
const production  = (util.env.production == true)

gulp.task('default', ['serve'])

gulp.task('build', ['sass', 'js', 'views'], function (done) {
  done()
})

gulp.task('serve', ['build'], function () {
  browserSync.init({
    server: {
      baseDir: "./public"
    },
    port: 5000
  })

  gulp.watch("src/sass/**/*.scss", ['sass'])
  gulp.watch("src/js/**/*.js", ['js-watch'])
  gulp.watch(["src/views/**/*.html", "src/index.html"], ['views-watch'])
  // gulp.watch("public/**/*.html").on('change', browserSync.reload)
})

gulp.task('sass', function () {
  return gulp.src('./src/sass/application.scss')
    .pipe( sass().on('error', sass.logError) )
    .pipe( production ? cleanCss() : util.noop() )
    .pipe( gulp.dest('./public/css') )
    .pipe( browserSync.stream() )
})

gulp.task('js-watch', ['js'], function (done) {
  browserSync.reload()
  done()
})

gulp.task('views-watch', ['views'], function (done) {
  browserSync.reload()
  done()
})

gulp.task('js', function () {
  let bundle = browserify({
    entries: './src/js/app.js',
    debug: !production
  }).transform(babel)

  return bundle.bundle()
    .pipe( source('app.js') )
    .pipe( buffer() )
    .pipe( production ? uglify() : util.noop() )
    .on('error', util.log)
    .pipe( gulp.dest('./public/js/') )
})

gulp.task('views', ['views:index'], function () {
  return gulp.src('./src/views/**/*.html')
    .pipe( gulp.dest('./public/views') )
})

gulp.task('views:index', function () {
  return gulp.src('./src/index.html')
    .pipe( gulp.dest('./public') )
})
