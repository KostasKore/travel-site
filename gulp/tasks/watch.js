var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function(){

  browserSync.init({  //opens the project file on browser
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function(){
    browserSync.reload(); //refresh automatically the browser
  });

  watch('./app/assets/styles/**/**.css', function(){
    gulp.start('cssInject');
  });

}); //task watch

gulp.task('cssInject', ['styles'],function(){
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
