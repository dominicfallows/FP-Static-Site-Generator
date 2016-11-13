"use strict";

module.exports.templateTasks = function() {
  var templateTasks = {};

  // Array: function names to run on the development gulp task of the application
  templateTasks.devTasks = ['sayHello', 'scss', 'js', 'watch'];

  // Array: function names to run on the production gulp task of the application
  templateTasks.prodTasks = ['scss', 'js'];

  // An object of task functions
  templateTasks.tasks = {

    sayHello: function() {
      return console.log("hello, from the default template-gulpfile.js");
    },

    scss: function (res) {
      return function () {
        res.gulp.src(res.templatePath + "/scss/app.scss")
          .pipe(res.plugins.sass())
          .pipe(res.plugins.autoprefixer())
          .pipe(res.plugins.rename("app.css"))
          .pipe(res.gulp.dest(res.publicPath + "/css"));
      };
    },

    js: function (res) {
      return function () {
        res.gulp.src(res.templatePath + "/js/**/*.js")
          .pipe(res.plugins.concat('app.js'))
          .pipe(res.gulp.dest(res.publicPath + "/js"));
      };
    },

    watch: function(res) {
      res.gulp.watch([res.templatePath + "/scss/**/*.scss"], ["template-scss"]);
      res.gulp.watch([res.templatePath + "/js/**/*.js"], ["template-js"]);
    }

  };

  return templateTasks;
};