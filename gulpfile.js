"use strict";

// Config
var siteConfig = require('./config/site.json');
var devPort = 5000;
var devUiPort = 5100;

// Vendor dependencies
var gulp = require("gulp");
var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var debug = require('metalsmith-debug');
var browserSync = require('browser-sync');
var helpers = require('metalsmith-register-helpers');

// Lib dependencies
var utils = require('./lib/_utils.js');
var configUtils = require('./lib/configUtils.js');

// Tasks
gulp.task('build-site:dev', function() {
  // Check siteConfig is populated correctly
  configUtils.checkConfig(siteConfig, true);

  // Development Site Url
  siteConfig.siteUrl = "http://localhost:" + devPort;

  // Generate the site
  Metalsmith(__dirname)
    .metadata(siteConfig)
    .source('./content/pages')
    .destination('./public')
    .clean(true)
    .use(markdown())
    .use(drafts()) // only files that are NOT drafts
    .use(permalinks())
    .use(helpers({
      directory: 'lib/handleBarsHelpers'
    }))
    .use(layouts({
      engine: 'handlebars',
      directory: "templates/" + siteConfig.template,
      partials: "templates/" + siteConfig.template + "/partials"
    }))
    .use(debug()) // displays debug info on the console
    .build(function(err, files) {
      if (err) { throw err; }
    });
});

gulp.task("server:front", function() {

  // Check siteConfig is populated correctly
  configUtils.checkConfig(siteConfig);

  browserSync({
    port: devPort,
    ui: {
      port: devUiPort
    },
    server: "public",
    files: [
      "public/**/*.html",
      "public/assets/css/**/*.css",
      "public/assets/img/**/*",
      "public/assets/js/**/.js",
      "public/uploads/**/*"
    ],
    open: false
  });

});

gulp.task("watch", function() {
  gulp.watch(['./templates/**/*.html'], ['build-site:dev']);
  gulp.watch(['./content/**/*.md'], ['build-site:dev']);
});

gulp.task("default", ["build-site:dev", "server:front", "watch"], function() {

  // Log file changes to console
  function logFileChange(event) {
    var fileName = require("path").relative(__dirname, event.path);
    console.log("[" + "WATCH".green + "] " + fileName.magenta + " was " + event.type + ", running tasks...");
  }

});