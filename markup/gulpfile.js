let gulp = require(`gulp`);
let plumber = require(`gulp-plumber`);
let sourcemap = require(`gulp-sourcemaps`);
let less = require(`gulp-less`);
let postcss = require(`gulp-postcss`);
let autoprefixer = require(`autoprefixer`);
let server = require(`browser-sync`).create();

gulp.task(`css`, function () {
  return gulp.src(`source/less/style.less`)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write(`.`))
    // .pipe(gulp.dest("source/css"))
    .pipe(gulp.dest(`../public/css`))
    .pipe(server.stream());
});

gulp.task(`server`, function () {
  server.init({
    server: `source/`,
    notify: false,
    open: false,
    cors: true,
    ui: false
  });

  gulp.watch(`source/less/**/*.less`, gulp.series(`css`));
  // gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task(`start`, gulp.series(`css`, `server`));
