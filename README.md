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
| [Configuration](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/configuration.md) | <ul><li>[Configuration Properties](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/configuration.md#configuration-properties)</li></ul> |
| [Templating](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/templating.md) | <ul><li>[Template Structure](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/templating.md#template-structure) (in build)</li><li>[Template Helpers](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/templating.md#template-helpers) (in build)</li></ul> |
| [Content](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/content.md) | <ul><li>[Pages](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/templating.md#pages) (in build)</li><li>[Media](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/templating.md#media) (in build)</li></ul> |

## Development Roadmap
| Milestone | Feature Summary | Description | Estimate Delivery Date |
| --------- | --------------- | ----------- | ---------------------- |
| 1.0.0-beta 	| manual static site generation system | Implement static site generation system with layout engine and folder structure. This will enable a site to be generated using manual file manipulation making this project usable at this version. | w/e 2016-11-11 |
| 1.1.0-beta 	| + CMS server<br><br>*with manual Media and Template Management* | Add a CMS server integrated with the static site generation system. This will enable a site to be generated using a WYSIWYG size CMS automatically creating the static site files.<br><br> At this stage:<br> 1. Media Management (upload, manage and handle images, videos and other files) will be manual<br><br> 2. Template Management (create, edit and assign layout templates) will be manual | w/e 2016-12-09 |
| 1.2.0-beta 	| + CMS Media Management | Upload, manage and handle media (images, videos and other files) via the CMS. | w/e 2016-12-23 |
| 1.3.0-beta 	| + CMS Template Management | Create, edit and assign layout templates via the CMS. | w/e 2016-11-25 |
Roadmap next stages TBC.

## Licenses

This project typically use the [MIT](LICENSE) license for code.
Some included projects license documentation and other forms of content under different licenses. See specific projects to understand the license used.