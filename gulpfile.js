var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var addsrc = require('gulp-add-src');
var replace = require('gulp-replace');
var jsifyTemplates = require('gulp-jsify-html-templates');
var uglify = require('gulp-uglify');
var order = require("gulp-order");
var htmlreplace = require('gulp-html-replace');


gulp.task('inline-templates', function() {
    return  gulp.src( [
      './src/templates/**/*.html',
      
      ])
    .pipe(jsifyTemplates())
    //.pipe(replace("htmlTemplates", 'modalSelectTemplates'))
    .pipe(concat('templates.js'))
    .pipe(addsrc('src/banner.js'))
    .pipe(addsrc('src/footer.js'))
    .pipe(order(['src/banner.js', 'templates.js', 'src/footer.js']))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./dist/templates'))
    .pipe(uglify({mangle:false}))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./dist/templates'))

});


gulp.task('index', function(){
    gulp.src('src/index.html')
    .pipe(htmlreplace({
        'templatejs': 'templates/templates.min.js'
    }))
    .pipe(gulp.dest('dist/'));
})

gulp.task('lib', function() {
    return gulp.src( './src/lib/**/*.*')
    .pipe(gulp.dest('./dist/lib'))
});

gulp.task('js', function() {
    return gulp.src( './src/js/**/*.*')
    .pipe(gulp.dest('./dist/js'))
});


gulp.task('css-modal-select', function() {
    return gulp.src( './src/ionic-modal-select.css')
    .pipe(gulp.dest('./dist/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./dist/'))

});


gulp.task('watch', function() {
  gulp.watch(['./src/templates/**/*.html'], ['inline-templates']);
  gulp.watch(['./src/index.html'], ['index']);
  gulp.watch(['./src/lib/**/*.*'], ['lib']);
  gulp.watch(['./src/js/**/*.*'], ['js']);

});

gulp.task('default', ['inline-templates', 'index', 'lib', 'js']);

