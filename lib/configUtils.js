"use strict";
var fs = require('fs');

// Check the site config JSON
module.exports.checkConfig = function(configObj, developmentMode) {

  var developmentMode = typeof developmentMode !== "undefined" ? developmentMode : true;

  // Check configObj has the required properties
  if(typeof configObj.siteTitle === 'undefined' || configObj.siteTitle === "") {
    throw new Error("The site.json file needs to contain a title property");
  }

  if(typeof configObj.siteDescription === 'undefined' || configObj.siteDescription === "") {
    throw new Error("The site.json file needs to contain a description property");
  }

  if(typeof configObj.template === 'undefined' || configObj.template === "") {
    throw new Error("The site.json file needs to contain a template property");
  }

  if(!developmentMode) {
    if(typeof configObj.siteUrl === 'undefined' || configObj.siteUrl === "") {
      throw new Error("The site.json file needs to contain a siteUrl");
    }
  }

}