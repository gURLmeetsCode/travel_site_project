var gulp = require('gulp');
var watch = require('gulp-watch');


gulp.task('default', function(){
    console.log("success");
});

gulp.task('html', function(){
    console.log("html works");
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
});