# CIMI Editor

### Getting Started

Be sure you have the latest versions of node.js, TypeScript, and [tsd](https://www.npmjs.com/package/tsd) installed on your machine.

Run `npm install` on project root to install dependencies.

Run `npm start` to start browserSync, which auto-loads the `dist` `index.html` in your default browser and automatically refreshes your browser when application files change. (Note that you can run the site with other web servers, but `npm start` will start a local instance and perform linting and compilation.)

### Workflow

All code and content edits are done inside of the `app` folder. The `dist` folder is auto-populated from the compiled code inside the `app` folder, along with included `node_modules`.

If you wish to include an additional library, use `package.json` to include the dependency, then add the source file(s) to `gulpfile.ts` in the copy:libs task. Lastly, be sure to reference the library inside the root index.html by the given filepath. 

Angular 2 is designed around Components. Because of this, it is expected that additional features (e.g., toolbar, datetime widget) be grouped under folders with the name of the feature inside the `app/` folder. See the [Angular 2.0 Style Guide](https://github.com/mgechev/angular2-style-guide) project for more details.

When working with internal scripts, you should edit only files which end in .ts and not their identically named siblings ending in .js and .js.map. Any changes made to the latter two files will be automatically overwritten as TypeScript is converted to JavaScript.

*There is a bug in the auto-refresh, so if your changes aren't being registered live (after a small delay), you may need to refresh the page.


### Resources

[Angular 2.0 Style Guide](https://github.com/mgechev/angular2-style-guide)

[Angular 2.0 Sample Components](https://github.com/thelgevold/angular-2-samples)