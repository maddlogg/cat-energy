const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const { watch } = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const { run } = require("node:test");

gulp.task("styles", function () {
  return gulp
    .src("./sass/**/styles.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      postcss([
        autoprefixer({
          cascade: true,
        }),
      ])
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./css"));
});

exports.watch = function () {
  gulp.watch("./sass/*.scss", gulp.series("styles"));
  gulp.watch("./sass/blocks/*.scss", gulp.series("styles"));
  gulp.watch("./sass/variables/*.scss", gulp.series("styles"));
};
