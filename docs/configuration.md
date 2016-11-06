# Configuration

[Back to README](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/)

## <a name="configuration-properties"></a>Configuration Properties
`config/site.json -> siteUrl` (added 1.0.0-beta) The siteUrl property will be used throughout the project content and templates to create full URLs links, so this ultimately should be your live URL. During the development build process this property is ignored, replaced by an automatically created localhost URL and port. You can change the development ports as described below.

`gulpfile.js -> devPort & devUiPort` (added 1.0.0-beta) The development build process ports can be changed if needed, for example, if you have multiple projects being built at the same time.