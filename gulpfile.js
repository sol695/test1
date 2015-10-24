var gulp = require("gulp"),
		connect = require("gulp-connect"),
		opn = require("opn");


//lifereload
gulp.task('connect', function(){
	connect.server({
		root:'app',
		livereload: true,
		port:8888
		});
	opn('http://localhost:8888');
	});

//html
gulp.task('html', funciton(){
	gulp.src('./app/*.html')
	.pipe(connect.reload());
	});
	//css
gulp.task('css', funciton(){
	gulp.src('./app/css/*.css')
	.pipe(connect.reload());
	});
	//js
gulp.task('js', funciton(){
	gulp.src('./app/js/*.js')
	.pipe(connect.reload());
	});

//слежка
gulp.task('watch', funciton(){
	gulp.watch(['.app/*html'], ['html']);
	gulp.watch(['.app/css/*css'], ['css']);
	gulp.watch(['.app/js/*js'], ['js']);
	});

// задачи по умолчанию
gulp.task('default', ['connect','watch']);