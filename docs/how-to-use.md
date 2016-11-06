# How to use

[Back to README](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/)

## <a name="install"></a>Install (added 1.0.0-beta)
Clone, or download, the project. Open a terminal at the root of the project folder:

1. Install dependencies, by typing  `npm i`

## <a name="development-build"></a>Development Build (added 1.0.0-beta)
1. Update your sites general information in `config/site.json`. <small>See [Configuration Properties](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/configuration.md#configuration-properties) for further information.</small>
2. Update development build process ports in `gupfile.js` if needed. <small>See [Configuration Properties](https://github.com/dominicfallows/FP-Static-Site-Generator-with-CMS-Server/blob/master/docs/configuration.md#configuration-properties) for further information.</small>
3. Run the build process, by typing `gulp`. This will start the **build process**, the **local build webserver** (the console will tell you what the URL to open in your browser is), and **watch for changes** to files and then **auto-reload your browser** with these changes.

## <a name="production-build"></a>Production Build (added 1.0.0-beta)
After you have installed and developed your site, to create a build ready for production deployment:

1. Run the development build process, by typing `gulp build-site:dev`. The files in `public` will be generated ready for development use, for example the URLs will be produced using the development host and port settings.

### Production Build (in build)
Not yet implemented
