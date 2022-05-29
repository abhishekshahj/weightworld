/**
 * Settings
 * Turn on/off build features
 */

var settings = {
  clean: true,
  scripts: true,
  polyfills: true,
  styles: true,
  svgs: true,
  copy: true,
  reload: true,
  move: true,
  headFoot: true
};

/**
 * Paths to project folders
 */

var paths = {
  input: "app/",
  output: "dev/",
  html: "app/html/*.html",
  prod: {
    input: "prod/",
    output: "prod/",
    reload: "./prod/",

    styles: {
      input: "app/scss/**/*.{scss,sass}",
      output: "prod/css/"
    },
    images: {
      input: "dev/images/**/*",
      output: "prod/images"
    },
    fonts: {
      input: "dev/fonts/**/*",
      output: "prod/fonts"
    },
    scripts: {
      input: "dev/js/*",
      output: "prod/js/"
    },
  },
  scripts: {
    input: "app/js/*",
    polyfills: ".polyfill.js",
    output: "dev/js/"
  },
  styles: {
    input: "app/scss/**/*.{scss,sass}",
    output: "dev/css/",
    cssInput: "app/css/"
  },
  svgs: {
    input: "app/svg/*.svg",
    output: "dev/images/svg/"
  },
  copy: {
    input: "app/copy/**/*",
    output: "dev/"
  },
  reload: "./dev/"
};

/**
 * Gulp Packages
 */

// General
var { gulp, src, dest, watch, series, parallel } = require("gulp");
var del = require("del");
var flatmap = require("gulp-flatmap");
var lazypipe = require("lazypipe");
var rename = require("gulp-rename");

// Scripts
var jshint = require("gulp-jshint");
var stylish = require("jshint-stylish");
var concat = require("gulp-concat");
var uglify = require("gulp-terser");
var optimizejs = require("gulp-optimize-js");

// Styles
var sass = require('gulp-sass')(require('sass'));
var postcss = require("gulp-postcss");
var prefix = require("autoprefixer");
var minify = require("cssnano");

var useref = require("gulp-useref");
var gulpIf = require("gulp-if");

// SVGs
var svgmin = require("gulp-svgmin");

// BrowserSync
var browserSync = require("browser-sync");

var fileinclude = require("gulp-file-include");

/**
 * Gulp Tasks
 */

var includeTemplate = function(done) {
  if (!settings.clean) return done();

  return src(paths.html)
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file"
      })
    )
    .pipe(dest(paths.output));
};

// Remove pre-existing content from output folders
var cleanDev = function(done) {
  // Make sure this feature is activated before running
  if (!settings.clean) return done();

  // Clean the dist folder
  del.sync([paths.output]);

  // Signal completion
  return done();
};

var cleanProd = function(done) {
  // Make sure this feature is activated before running
  if (!settings.clean) return done();

  // Clean the dist folder
  del.sync([paths.prod.output]);

  // Signal completion
  return done();
};

// Move the javascript files into our /app/js folder
// var moveJs = function (done){

// 	// Make sure this feature is activated before running
// 	if (!settings.move) return done();

// 	return src([
// 		'node_modules/jquery/dist/jquery.js',
// 		'node_modules/bootstrap/dist/js/bootstrap.js'
// 	])
// 	.pipe(dest('app/js'))
// 	// .pipe(browserSync.stream());

// };

// Repeated JavaScript tasks
var jsTasks = lazypipe()
  // .pipe(optimizejs)
  // .pipe(dest, paths.scripts.output)
  // .pipe(rename, { suffix: ".min" })
  .pipe(uglify)
  .pipe(optimizejs)

  .pipe(dest, paths.scripts.output);

// Lint, minify, and concatenate scripts
var devScripts = function(done) {
  // Make sure this feature is activated before running
  if (!settings.scripts) return done();

  // Run tasks on script files
  return src(paths.scripts.input).pipe(
    flatmap(function(stream, file) {
      // If the file is a directory
      if (file.isDirectory()) {
        // Setup a suffix variable
        var suffix = "";

        // If separate polyfill files enabled
        if (settings.polyfills) {
          // Update the suffix
          suffix = ".polyfills";

          // Grab files that aren't polyfills, concatenate them, and process them
          src([
            file.path + "/*.js",
            "!" + file.path + "/*" + paths.scripts.polyfills
          ])
            .pipe(concat(file.relative + ".js"))
            .pipe(jsTasks());
        }

        // Grab all files and concatenate them
        // If separate polyfills enabled, this will have .polyfills in the filename
        src(file.path + "/*.js")
          .pipe(concat(file.relative + suffix + ".js"))
          .pipe(jsTasks());

        return stream;
      }

      // Otherwise, process the file
      return stream.pipe(jsTasks());
    })
  );
};

// Lint scripts
var lintScripts = function(done) {
  // Make sure this feature is activated before running
  if (!settings.scripts) return done();

  // Lint scripts
  return src(paths.scripts.input)
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"));
};

// Process, lint, and minify Sass files
var devStyles = function(done) {
  // Make sure this feature is activated before running
  if (!settings.styles) return done();

  // Run tasks on all Sass files
  return src(paths.styles.input)
    .pipe(
      sass({
        outputStyle: "expanded",
        sourceComments: true
      })
    )
    // .pipe(
    //   postcss([
    //     prefix({
    //       cascade: true,
    //       remove: true
    //     })
    //   ])
    // )

    // .pipe(dest(paths.styles.output))
    // // .pipe(rename({ suffix: ".min" }))
    // .pipe(
    //   postcss([
    //     minify({
    //       discardComments: {
    //         removeAll: true
    //       }
    //     })
    //   ])
    // )
    .pipe(dest(paths.styles.output));
};

// Optimize SVG files
var buildSVGs = function(done) {
  // Make sure this feature is activated before running
  if (!settings.svgs) return done();

  // Optimize SVG files
  return src(paths.svgs.input)
    .pipe(svgmin())
    .pipe(dest(paths.svgs.output));
};

// Copy static files into output folder
var copyFiles = function(done) {
  // Make sure this feature is activated before running
  if (!settings.copy) return done();

  // Copy static files
  return src(paths.copy.input).pipe(dest(paths.copy.output));
};

/*-- Production Files --*/

// Optimizing JavaScript
var OptiJs = function(done) {
  if (!settings.scripts) return done();

  return src("dev/js/*.js")
    .pipe(useref())
    .pipe(
      gulpIf(
        "*.js",
        uglify({
          output: {
            comments: false
          }
        })
      )
    )
    // .pipe(gulpIf("*.css", postcss([minify()])))
    .pipe(dest(paths.prod.scripts.output));
};


// Optimizing CSS
var OptiCss = function(done) {
  if (!settings.scripts) return done();

  return src("dev/css/*.css")
    .pipe(useref())
    .pipe(gulpIf("*.css", postcss([minify()])))
    .pipe(dest(paths.prod.styles.output));
};

var copyimages = function(done) {
  // Make sure this feature is activated before running
  if (!settings.copy) return done();

  // Copy static files
  return src(paths.prod.images.input).pipe(dest(paths.prod.images.output));
};
var copyFonts = function(done) {
  // Make sure this feature is activated before running
  if (!settings.copy) return done();

  // Copy static files
  return src(paths.prod.fonts.input).pipe(dest(paths.prod.fonts.output));
};

// Copy static files into output folder
var copyHtml = function(done) {
  // Make sure this feature is activated before running
  if (!settings.copy) return done();

  // Copy static files
  return src("dev/*.html").pipe(dest(paths.prod.output));
};

// Watch for changes to the src directory
var startServer = function(done) {
  // Make sure this feature is activated before running
  if (!settings.reload) return done();

  // Initialize BrowserSync
  browserSync.init({
    server: {
      baseDir: paths.reload
    }
  });

  // Signal completion
  done();
};

var startServerProd = function(done) {
  // Make sure this feature is activated before running
  if (!settings.reload) return done();

  // Initialize BrowserSync
  browserSync.init({
    server: {
      baseDir: paths.prod.reload
    }
  });

  // Signal completion
  done();
};

// Reload the browser when files change
var reloadBrowser = function(done) {
  if (!settings.reload) return done();
  browserSync.reload();
  done();
};

// Watch for changes
var watchSource = function(done) {
  watch(paths.input, series(exports.default, reloadBrowser));
  done();
};

// Watch for changes
var watchProd = function(done) {
  watch(paths.prod.input, series(exports.prod, reloadBrowser));
  done();
};

exports.prod = series(
  cleanProd,
  copyimages,
  copyFonts,
  copyHtml,
  parallel(
    // prodStyles,
    OptiJs,
    OptiCss
  )
);

// Watch and reload
// gulp watch
exports.prodwatch = series(exports.prod, startServerProd, watchProd);

/**
 * Export Tasks
 */

// Default task
// gulp
exports.default = series(
  cleanDev,
  parallel(
	// moveJs,
	includeTemplate,
    devScripts,
    lintScripts,
    devStyles,
    buildSVGs,
    copyFiles
  )
);

// Watch and reload
// gulp watch
exports.watch = series(exports.default, startServer, watchSource);
