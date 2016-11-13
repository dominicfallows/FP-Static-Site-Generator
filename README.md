# FP Static Site Generator with CMS Server (beta)
A static website generator with self-hosted CMS server. Built with JavaScript, this project enables cross-platform use and creates many possible implementation opportunities.

## <a name="project-specification"></a>Project Specification (updated 1.0.0-beta)
* [Gulp](http://gulpjs.com/) build system
* [Metalsmith](http://www.metalsmith.io/) static site generator
* [Handlebars](http://handlebarsjs.com/) template engine
* Custom Handlebar helpers (see [Templating > Helpers](#template-helpers))

## Documentation
| Section | Summary |
| ------- | ------- | 
| [How to use](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/how-to-use.md) | <ul><li>[Install](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/how-to-use.md#install) (added 1.0.0-beta)</li><li>[Development Build](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/how-to-use.md#development-build) (added 1.0.0-beta)</li><li>[Production Build](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/how-to-use.md#production-build) (in build)</li></ul> |
| [Configuration](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/configuration.md) | <ul><li>[Configuration Properties](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/configuration.md#configuration-properties) (added 1.0.0-beta)</li></ul> |
| [Templating](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/templating.md) | <ul><li>[Template Structure](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/templating.md#template-structure) (added 1.0.0-beta)</li><li>[Template Helpers](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/templating.md#template-helpers) (added 1.0.0-beta)</li><li>[Template CSS/JS (Preprocessors)](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/templating.md#template-css-js-preprocessors) (added 1.0.0-beta)</li><li>[Template Bundling](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/templating.md#template-bundling) (in build)</li></ul> |
| [Template Examples](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/template-examples.md) | <ul><li>[Default Template](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/template-examples.md#default-template) (added 1.0.0-beta)</li><li>[Foundation for Sites Template](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/template-examples.md#foundation-for-sites-template) (in build)</li></ul> |
| [Content](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/content.md) | <ul><li>[Pages](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/templating.md#pages) (added 1.0.0-beta)</li><li>[Posts](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/templating.md#posts) (in build)</li><li>[Media](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/templating.md#media) (in build)</li></ul> |
| CMS | (in build) |

## Development Roadmap
| Milestone | Feature Summary | Description | Estimate Delivery Date |
| --------- | --------------- | ----------- | ---------------------- |
| 1.0.0-beta 	| Manual static site generation system <br>+ Development build process<br>+ Page content | Enable a site to be generated using manual file manipulation making this project usable at this version. <br><br>This version will implement the static site generation system with: <ul><li>Template engine (with template Gulp tasks)</li><li>Default Template (with template Gulp tasks, basic SCSS and JS manipulation)</li><li>Page content (with manual and automatic organisation of generated pages and therefore a basic permalink structure)</li><li>Development build process (non-minified components, debug enabled etc)</li><li>Documentation for completed components</li></ul>| w/e 2016-11-12 |
| 1.?.0-beta 	| + Modular front-end JS <br>+ Post content | <ul><li>Extend Default Template to show use of a modular front-end JS handler (like [Browserify](http://browserify.org/)</li><li>Posts content (dated collections of posts and archives)</li><li>Documentation for completed components</li></ul> | w/e 2016-11-19 |
| 1.?.0-beta 	| + Media content | <ul><li>Media handling in templates/content (support auto-embedded media with URLs/oEmbed via template (handlebars) helper)</li><li>Documentation for completed components</li></ul> | w/e 2016-11-26 |
| 1.?.0-beta 	| + Production build process | <ul><li>Production build process (minified components, no debug output etc)</li><li>Documentation for completed components</li></ul> | w/e 2016-12-03 |
| 1.0.0-RC | Testing and QA | <ul><li>Restructure Github repo for beta/release candidate and stable branches</li><li>Release Candidate Testing and QA ready for launch of 1.0.0 (stable)</li><li>Documentation for 1.0.0 (stable)</li></ul> | w/e 2016-12-17 |
| 1.0.0-RC | Prepartion for launch of 1.0.0 | <ul><li>Naming, Branding and Creative Development Process</li><li>Development of product website for 1.0.0 (stable) (using 1.0.0 stable)</li><li>Domains and hosting setup</li></ul> | w/e 2016-12-24 |
| 1.0.0 | Launch of 1.0.0 | <ul><li>Launch of product website for 1.0.0 stable</li><li>Launch of Github branch for 1.0.0 stable</li></ul> | w/e 2017-01-07 |
| 2.0.0-beta 	| CMS server (local) | Add a CMS server integrated with the static site generation system. This will enable a site to be generated using a WYSIWYG size CMS automatically creating the static site files.<br><br> At this stage: <ol><li>The CMS server will be local, running via the build process - not intended to be running on internet/intranet infrastructure</li><li>Media Management (upload, manage and handle images, videos and other files) will be manual</li><li>Template Management (create, edit and assign layout templates) will be manual</li></ul> | TBD |
| 2.?.0-beta 	| + CMS Media Management | Upload, manage and handle media (images, videos and other files) via the CMS. | TBD |
| 2.0.0-RC | Testing and QA | <ul><li>Release Candidate Testing and QA ready for launch of 2.0.0 (stable)</li><li>Documentation for 2.0.0 (stable)</li></ul> | TBD |
| 2.0.0 | Launch of 2.0.0 | <ul><li>Update product website for 2.0.0 stable</li><li>Update Github stable branch</li></ul> | TBD |

Roadmap next stages TBC, but features already in the pipeline are: 

| Milestone | Feature Summary | Description | Estimate Delivery Date |
| --------- | --------------- | ----------- | ---------------------- |
| TBD | Cloud Deployment - Front-end (static site) | Enable delpoyment of production build of static site to cloud infrastructures: <ul><li>Using npm/gulp tasks</li><li>via the CMS</li></ul> | TBD |
| TBD 	| CMS (on internet/intranet server) | Make the CMS standalone and able to run on internet/intranet infrastructure (as well as on a local server via the build process) | TBD |
| TBD 	| CMS Authentication<br> | Authentication system, to control access to the CMS | TBD |

## Licenses

This project typically uses the [MIT](LICENSE) license for code.
Some included projects license documentation and other forms of content under different licenses. See specific projects to understand the license used.