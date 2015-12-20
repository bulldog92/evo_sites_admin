var lr = require('tiny-lr'), // Минивебсервер для livereload
    gulp = require('gulp'), // Сообственно Gulp JS
    livereload = require('gulp-livereload'), // Livereload для Gulp
    csso = require('gulp-csso'), // Минификация CSS
    imagemin = require('gulp-imagemin'), // Минификация изображений
    uglify = require('gulp-uglify'), // Минификация JS
    concat = require('gulp-concat'), // Склейка файлов
    connect = require('connect'), // Webserver
    server = lr();

gulp.task('default', function() {
  // place code for your default task here
  console.log('Gulp is work');
});
gulp.task('build', function(){
    
});

gulp.task('css', function(){
   gulp.src('app/css/*.css')
    .pipe(csso()) // минимизируем css
    .pipe(gulp.dest('app/dist/css')) // записываем css 
});

// Собираем JS
gulp.task('js', function() {
    gulp.src(['app/js/**/*.js', '!app/dist/**/*.js'])
        .pipe(concat('index.js'))
        .pipe(gulp.dest('app/dist/js'))
        .pipe(livereload(server)); // даем команду на перезагрузку страницы
});
//изображения
gulp.task('images', function() {
    gulp.src('app/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/dist/img'))

});