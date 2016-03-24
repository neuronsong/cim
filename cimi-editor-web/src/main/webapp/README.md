# Clinical Information Modeling (CIM) Editor

### Getting Started

Be sure you have the latest versions of node.js, TypeScript, jspm installed on your machine.

Run `npm install` and `jspm ` on project root to install dependencies.

Run `npm start` to start live server, hosting `index.html` in your default browser and automatically refreshing your browser when application files change. (Note that you can run the site with other web servers, but `npm start` will start a local instance and perform linting and live compilation.)

### Workflow

All code and content edits are done inside of the `app` folder.

If you wish to include an external library, use `package.json` to include the dependency. Be sure to reference the library inside the root index.html by the given filepath. 

Angular 2 is designed around Components. Because of this, it is expected that additional features (e.g., toolbar, datetime widget) be grouped under folders with the name of the feature inside the `app/components` folder. See the [Angular 2.0 Style Guide](https://github.com/mgechev/angular2-style-guide) project for more details.

When working with internal scripts, you should edit only files which end in .ts and not their identically named siblings ending in .js and .js.map. Any changes made to the latter two files will be automatically overwritten as TypeScript is converted to JavaScript.

### Resources

[Angular 2.0 Style Guide](https://github.com/mgechev/angular2-style-guide)

[Angular 2.0 Sample Components](https://github.com/thelgevold/angular-2-samples)

[TypeScript](http://www.typescriptlang.org)

[Node.js](https://nodejs.org/en/)

[npm.js](https://www.npmjs.com)

[modern-web-dev-build (performs gulp and build tasks for us)](https://www.npmjs.com/package/modern-web-dev-build)

[jspm (Package Manager)](http://jspm.io)
   
[es6-shim.js](https://www.npmjs.com/package/es6-shim)

[angular2-polyfills.js](https://www.npmjs.com/package/angular2-polyfill)

[system.src.js](https://github.com/systemjs/systemjs)

[Rx.js](https://github.com/Reactive-Extensions/RxJS)

### Acknowledgements

This website was generated with [generator-modern-web-dev](https://www.npmjs.com/package/generator-modern-web-dev), a life-saving tool to avoid the hassle of manually setting up a real Javascript application in Angular 2.