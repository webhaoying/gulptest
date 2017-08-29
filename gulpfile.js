/**
 * Created by roboterra_rd on 2017/6/16.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var connect = require('gulp-connect');//使用connect启动一个Web服务器

gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('jshint',function () {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
// styles gulp task
gulp.task('less',function () {
        gulp.src('./src/style/*.less')
            .pipe(less())
            .pipe(gulp.dest('./build/css'))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./build/min'))
            .pipe(connect.reload());
    }

)
gulp.task('cmin',function () {
        gulp.src('./build/css/*.css')
            .pipe(rename({suffix: '.min'}))
            .pipe(minifyCss())
            .pipe(gulp.dest('build/min'));
    }

)
// scripts gulp task
gulp.task('js',['jshint'],function () {
        gulp.src('./src/js/*.js')
            .pipe(gulp.dest('./build/js'))
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify ())
            .pipe(gulp.dest('./build/min'))
            .pipe(connect.reload())
    }

)
gulp.task('connect', ['watch'],function() {
    connect.server({
        host: '', //地址，可不写，不写的话，默认localhost
        port: '8000', //端口号，可不写，默认8000
        root: './', //当前项目主目录
        livereload: true //自动刷新
    });
});
gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});
gulp.task('server', ['connect']);
// default gulp task
gulp.task('default', [ 'js', 'less','cmin','server','watch']);
gulp.task('watch',function () {
    gulp.watch('./src/style/*.less', ['less','html']); //监控css文件
    gulp.watch('./build/css/*.css', ['cmin','html']); //监控css文件
    gulp.watch('./src/js/*.js', ['js','jshint','html']); //监控js文件
    gulp.watch(['./*.html'], ['html']); //监控html文件
});