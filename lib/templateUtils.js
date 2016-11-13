"use strict";
var fs = require('fs');
var path = require('path');
var run = require('gulp-run');

// Template vars
var templatesPath = "templates";
var templateMainTasks = [];

// Functions
function fileExists(filepath) {
  if (!filepath) { return false; }

  try {
    return fs.statSync(filepath).isFile();
  }
  catch (e) {
    
    // Only throw an exception if the error is not `ENOENT` (no such file or directory/file doesn't exist)
    if (e.code !== 'ENOENT') { 
      throw e;
    }
    
    return false;
  }
}

// Exports

// Check for, and return template tasks in a 'template-gulpfile.js' file in the active template folder
module.exports.getTemplateTasks = function(gulp, plugins, publicPath, templateName) {
  var returnObject = {};

  try {
    var templatePath = path.join(templatesPath, templateName);
    var templateGulpfilePath = path.join(templatePath, '/template-gulpfile.js');

    // Is there a the template-gulpfile.js?
    if(!fileExists(templateGulpfilePath)) { 
      return false;
    }
    
    // Require the template-gulpfile.js file
    var templateGulpfile = require("../" + templateGulpfilePath);
      
    // Does the template-gulpfile.js file have the correct exported module?
    if(typeof templateGulpfile.templateTasks !== "function") {
      throw new Error("getTemplateTasks Error: templateTasks module not found", "./lib/templateUtils.js");
    }
    var templateTasks = templateGulpfile.templateTasks();

    // Does the template-gulpfile.js file have the correct arrays? If so add them to the returnObject

    // Dev tasks
    if(templateTasks.devTasks.constructor !== Array) {
      throw new Error("getTemplateTasks Error: templateTasks.devTasks array not found", "./lib/templateUtils.js");
    }
    var devTasks = [];
    for(var task in templateTasks.devTasks) {
      devTasks.push("template-" + templateTasks.devTasks[task]);
    }
    returnObject.devTasks = devTasks;

    // Prod tasks
    if(templateTasks.prodTasks.constructor !== Array) {
      throw new Error("getTemplateTasks Error: templateTasks.prodTasks array not found", "./lib/templateUtils.js");
    }
    var prodTasks = [];
    for(var task in templateTasks.prodTask) {
      prodTasks.push("template-" + templateTasks.prodTask[task]);
    }
    returnObject.prodTasks = prodTasks;

    // Gulp tasks
    if(templateTasks.tasks.constructor !== Object) {
      throw new Error("getTemplateTasks Error: templateTasks.tasks array not found", "./lib/templateUtils.js");
    }

    // Loop through template tasks and create gulp tasks
    for (var taskName in templateTasks.tasks) {
      if (templateTasks.tasks.hasOwnProperty(taskName)) {
        gulp.task( "template-" + taskName, 
          templateTasks.tasks[taskName]({ 
            "gulp": gulp, 
            "plugins": plugins, 
            "templatePath": templatePath, 
            "publicPath": publicPath
          })
        );
      }
    }

    // Return
    return returnObject;

  } catch(err) {
    throw new Error("getTemplateTasks Error: " + err.message, "./lib/templateUtils.js");
  }

}

// Install template packages
module.exports.installTemplatePackages = function(gulp, templateName) {

  try {
    var templatePackageJsonPath = path.join(templatesPath, templateName);

    // Is there a template-package.json?
    if(!fileExists(templatePackageJsonPath + "/package.json")) { 
      return false;
    }

    // Run the npm i on the tempate folder
    var installCmd = "npm --prefix ./" + templatePackageJsonPath + " install ./" + templatePackageJsonPath;

    return run(installCmd).exec().pipe(gulp.dest('output'));

  } catch(err) {
    throw new Error("installTemplatePackages Error: " + err.message, "./lib/templateUtils.js");
  }

}