# FP Static Site Generator with CMS Server (beta)
A static website generator; pluggable and standalone. Built with [JavaScript and technologies](https://github.com/dominicfallows/FP-Static-Site-Generator#project-specification) that enable cross-platform use and create many possible implementation opportunities.

Use the [default templates](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/template-examples.md) or [create your own](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/templating.md). Style with CSS/SCSS/LESS as you please. Use JavaScript, jQuery or your favourite JS library. Focus on HMTML/Markdown [content](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/content.md) with an intuitive [template engine](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/templating.md) to enhance.

This generator compiles your assets into a [static site build](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/how-to-use.md) that you can distribute and host how you like. 

Static sites are simpler by nature, enabling performance and reliability without the need for an advanced server setup. Upload your static site to your chosen host, or scale your hosting using cloud providers and a distributed setup. Static sites can make automated distribution simple. The project aims to implement [distribution tools](https://github.com/dominicfallows/FP-Static-Site-Generator#future-pipeline) to make this even easier.

## <a name="project-specification"></a>Project Specification
Updated 1.0.0-beta

* [Gulp](http://gulpjs.com/) build system
* [Metalsmith](http://www.metalsmith.io/) static site generator
* [Handlebars](http://handlebarsjs.com/) template engine
* Custom Handlebar helpers (see [Templating > Helpers](#template-helpers))

## <a name="plugins"></a>Official Plugins
Updated 2016-11-14

Official plugins (currently meaning - plugins that have been developed by [DF](https://github.com/dominicfallows)), for use to enhance the features of the static site generator are: 

* [FP CMS Server](https://github.com/dominicfallows/FP-CMS-Server) (in build) - a self-hosted CMS server, a plugin for FP Static Site Generator or standalone

## Documentation
| Section | Summary |
| ------- | ------- | 
| [How to use](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/how-to-use.md) | <ul><li>[Install](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/how-to-use.md#install) (added 1.0.0-beta)</li><li>[Development Build](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/how-to-use.md#development-build) (added 1.0.0-beta)</li><li>[Production Build](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/how-to-use.md#production-build) (in build)</li></ul> |
| [Configuration](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/configuration.md) | <ul><li>[Configuration Properties](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/configuration.md#configuration-properties) (added 1.0.0-beta)</li></ul> |
| [Templating](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/templating.md) | <ul><li>[Template Structure](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/templating.md#template-structure) (added 1.0.0-beta)</li><li>[Template Helpers](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/templating.md#template-helpers) (added 1.0.0-beta)</li><li>[Template CSS/JS (Preprocessors)](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/templating.md#template-css-js-preprocessors) (added 1.0.0-beta)</li><li>[Template Bundling](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/templating.md#template-bundling) (in build)</li></ul> |
| [Template Examples](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/template-examples.md) | <ul><li>[Default Template](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/template-examples.md#default-template) (added 1.0.0-beta)</li><li>[Foundation for Sites Template](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/template-examples.md#foundation-for-sites-template) (in build)</li></ul> |
| [Content](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/content.md) | <ul><li>[Pages](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/templating.md#pages) (added 1.0.0-beta)</li><li>[Posts](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/templating.md#posts) (in build)</li><li>[Media](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/templating.md#media) (in build)</li></ul> |
| [Plugins](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/plugins.md) | <ul><li>[Install](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/plugins.md#install) (in build)</li><li>[Creating Plugins](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/plugins.md#create) (in build)</li></ul> |

## Development Roadmap
Updated 2016-11-15

| Milestone | Feature Summary | Description | Estimate Delivery Date | Status |
| --------- | --------------- | ----------- | ---------------------- | ------ |
| 1.0.0-beta 	| Manual static site generation system <br>+ Development build process<br>+ Page content | Enable a site to be generated using manual file manipulation making this project usable at this version. <br><br>This version will implement the static site generation system with: <ul><li>Template engine (with template Gulp tasks)</li><li>Default Template (with template Gulp tasks, basic SCSS and JS manipulation)</li><li>Page content (with manual and automatic organisation of generated pages and therefore a basic permalink structure)</li><li>Development build process (non-minified components, debug enabled etc)</li></ul>| w/e 2016-11-19 | Final Development, Testing & QA |
| 1.0.0-beta 	| Documentation | Initial Documentation created, and docs for completed components | w/e 2016-11-19 | In Build |
| 1.1.0-beta 	| + Modular front-end JS <br>+ Post content | <ul><li>Extend Default Template to show use of a modular front-end JS handler (like [Browserify](http://browserify.org/)</li><li>Posts content (dated collections of posts and archives)</li><li>Documentation for completed components</li></ul> | w/e 2016-11-26 |
| 1.?.0-beta 	| + Media content | <ul><li>Media handling in templates/content (support auto-embedded media with URLs/oEmbed via template (handlebars) helper)</li><li>Documentation for completed components</li></ul> | w/e 2016-12-03 |
| 1.?.0-beta 	| + Production build process | <ul><li>Production build process (minified components, no debug output etc)</li><li>Documentation for completed components</li></ul> | w/e 2016-12-10 |
| 1.0.0-RC | Testing and QA | <ul><li>Restructure Github repo for beta/release candidate and stable branches</li><li>Release Candidate Testing and QA ready for launch of 1.0.0 (stable)</li><li>Documentation for 1.0.0 (stable)</li></ul> | w/e 2016-12-17 |
| 1.0.0-RC | Preparation for launch of 1.0.0 | <ul><li>Naming, Branding and Creative Development Process</li><li>Development of product website for 1.0.0 (stable) (using 1.0.0 stable)</li><li>Domains and hosting setup</li></ul> | w/e 2016-12-24 |
| 1.0.0 | Launch of 1.0.0 | <ul><li>Launch of product website for 1.0.0 stable</li><li>Launch of Github branch for 1.0.0 stable</li></ul> | w/e 2017-01-07 |

## <a name="future-pipeline"></a>Development Roadmap - Future Pipeline

Updated 2016-11-14

| Milestone | Feature Summary | Description |
| --------- | --------------- | ----------- |
| TBD | Plugins | Enable the generator to be extended with [plugins](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/plugins.md) like the [FP CMS Server](https://github.com/dominicfallows/FP-CMS-Server) (in build) | TBD |
| TBD | Cloud Deployment (static site files) | Enable deployment of production build of static site to cloud infrastructures: <ul><li>Using npm/gulp tasks</li><li>via the [FP CMS Server](https://github.com/dominicfallows/FP-CMS-Server)</li></ul> | TBD |

## Licenses

This project typically uses the [MIT](LICENSE) license for code.
Some included projects license documentation and other forms of content under different licenses. See specific projects to understand the license used.