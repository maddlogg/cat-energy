const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");

function styles() {
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
}

exports.styles = styles;
exports.watch = function () {
  gulp.watch("./sass/**/*.scss", ["sass"]);
};
