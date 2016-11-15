# Configuration

[Back to README](https://github.com/dominicfallows/FP-Static-Site-Generator/)

## <a name="configuration-properties"></a>Configuration Properties (added 1.0.0-beta)
`config/site.json -> siteTitle` (added 1.0.0-beta) The siteTitle property will be used throughout the project and templates/content using the [template embedded handlebars expression](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/templating.md) `{{siteTitle}}`. For example, to create meta `<title>{{siteTitle}}</title>`.

`config/site.json -> siteDescription` (added 1.0.0-beta) The siteDescription property will be used throughout the project and templates/content using the [template embedded handlebars expression](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/templating.md) `{{siteDescription}}`. For example, to create meta `<meta name='description' content='{{siteDescription}}'>`.

`config/site.json -> siteUrl` (added 1.0.0-beta) The siteUrl property will be used throughout the project content and templates to create full URLs links, so this ultimately should be your live URL. During the development build process this property is ignored, replaced by an automatically created localhost URL and port. You can change the development ports as described below.

`config/site.json -> template` (added 1.0.0-beta) The template property is used throughout the core of the project. This is an important variable that enables you to choose the [site template](https://github.com/dominicfallows/FP-Static-Site-Generator/blob/master/docs/templating.md). Incorrect use of this property will cause the build to fail.

`gulpfile.js -> devPort & devUiPort` (added 1.0.0-beta) The development build process ports can be changed if needed, for example, if you have multiple projects being built at the same time.

---

**Note:** There are other config properties found in various project files. You shouldn't need to change any of these. When a property becomes something that can be changed, it will be documented here.