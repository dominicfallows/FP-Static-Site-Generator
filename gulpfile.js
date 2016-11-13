"use strict";

// Config variables you could change
var devPort = 5000;
var devUiPort = 5100;

// YOU SHOULDN'T NEED TO CHANGE ANYTHING BELOW HERE AT PRESENT
var siteConfig = require('./config/site.json');
var publicPath = "public";

// Vendor dependencies
var gulp = require("gulp");
var merge = require('lodash.merge');

// Merge our global and template package.json files
var packages = merge(
  require("./templates/" + siteConfig.template + "/package.json"),
  require("./package.json")
);
var plugins = require('gulp-load-plugins')({
  config: packages,
  pattern: ['*'],
  scope: ['dependencies', 'devDependencies', 'peerDependencies']
});
var argv = require('yargs').argv;

// Lib dependencies
var utils = require('./lib/_utils.js');
var configUtils = require('./lib/configUtils.js');
var templateUtils = require('./lib/templateUtils.js');

// Template tasks and dependencies 
var templateTasks = templateUtils.getTemplateTasks(gulp, plugins, publicPath, siteConfig.template);

// Tasks
// Check siteConfig is populated correctly
configUtils.checkConfig(siteConfig);

gulp.task('help', function() {  
  // Check siteConfig is populated correctly
  configUtils.checkConfig(siteConfig, true);

  // Show all registerd gulp tasks in console
  plugins.taskListing();
});

gulp.task('setup-template', function() {
  var templateName = argv.template || siteConfig.template;
  return templateUtils.installTemplatePackages(gulp, templateName);
});

gulp.task('build-site:dev', function() {
  // Development Site Url
  siteConfig.siteUrl = "http://localhost:" + devPort;

  // Generate the site
  plugins.metalsmith(__dirname)
    .metadata(siteConfig)
    .source('./content/pages/')
    .destination(publicPath)
    .clean(false) // don't clean as this wipes files added from other tasks
    .use(plugins.metalsmithDrafts()) // only files that are NOT drafts
    .use(plugins.metalsmithPermalinks())
    .use(plugins.metalsmithRegisterHelpers({
      directory: 'lib/handleBarsHelpers'
    }))
    .use(plugins.metalsmithLayouts({
      engine: 'handlebars',
      directory: "templates/" + siteConfig.template,
      partials: "templates/" + siteConfig.template + "/partials"
    }))
    .use(plugins.metalsmithDebug()) // displays debug info on the console
    .build(function(err, files) {
      if (err) { throw err; }
    });
});

gulp.task("server:front", function() {
  plugins.browserSync({
    port: devPort,
    ui: {
      port: devUiPort
    },
    server: publicPath,
    files: [
      publicPath + "/**/*.html",
      publicPath + "/**/*.css",
      publicPath + "/**/*.js"
    ],
    open: false
  });

});

gulp.task("watch", function() {
  gulp.watch(['./templates/**/*.html'], ['build-site:dev']);
  gulp.watch(['./content/**/*.html'], ['build-site:dev']);
});

gulp.task("default", function() {
  plugins.runSequence(
    templateTasks.devTasks,
    "build-site:dev",
    "server:front",
    "watch"
  );

  // Log file changes to console
  function logFileChange(event) {
    var fileName = require("path").relative(__dirname, event.path);
    console.log("[" + "WATCH".green + "] " + fileName.magenta + " was " + event.type + ", running tasks...");
  }

});