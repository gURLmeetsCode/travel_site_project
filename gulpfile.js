var gulp = require('gulp');
var watch = require('gulp-watch');


gulp.task('default', function(){
    console.log("success");
});

gulp.task('html', function(){
    console.log("something just changed in yout html file");
});

gulp.task('styles', function(){
    console.log("something just changed in your css files");
});

// utilizing gulp for file change automation

gulp.task('watch', function(){

    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });


});

