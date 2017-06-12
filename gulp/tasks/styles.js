var gulp = require('gulp');
var postcss = require('gulp-postcss');
var mixins = require('postcss-mixins'); // mixins need to be placed before vars and nested in order to work.
var cssvars = require('postcss-simple-vars');
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');




gulp.task('styles', function(){
   return gulp.src('./app/assets/styles/styles.css')
   .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
//    for gulp error handling
   .on('error', function(errorInfo){
       console.log(errorInfo.toString());
       this.emit('end');
   })
   .pipe(gulp.dest('./app/temp/styles'));
});