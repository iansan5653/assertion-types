# Project Boilerplate

This is the boilerplate file structure I use to start all of my TypeScript / NPM
projects. It includes:
* `eslintrc.json` - Tons of rules for ESLint, including TypeScript, Mocha, and
  JSDoc-specific rules. Extends from reccomended rulesets and from Google style.
* `.gitignore` - GitHub's default Node.js gitignore with some specific items
  to exclude test results, output, and coverage results.
* `.azure-pipelines.yml` - Setup for continuous integration with Azure
  Pipelines. Runs and reports TypeScript compile, ESLint check, Mocha tests,
  and coverage results on Ubuntu.
* `changelog.md` - Standard template for changelogs.
* `license.md` - MIT License. If you are not me, change the name.
* `package.json` - Standard package.json but with some added stuff:
  * `name` - Update this.
  * `version` - Start with 1.0.0 and use semantic versioning. Add changelog notes per version.
  * `description` - Use the same as the GitHub short description.
  * `repository` - Update to repo url.
  * `scripts` - Don't change this. For most of the scripts, see the notes below which I'd leave in the readme. Not included below are:
    * `testForCheck` - Only needed for the `check` task. Skips compile and outputs short summary.
    * `testForCI` - Used by Azure Pipelines. Skips compile and outputs report.
    * `ensureCleanTree` - Used by `prepublishOnly` task. Ensures git working tree is clean before publishing a new version.
    * `prepublishOnly` - Runs checks, compiles, minifies before publishing a new version.
    * `postpublish` - Pushes a new version tag to GitHub after publishing.
  * `author` - Update this if you're not me.
  * `devDependencies` - Explanations:
    * `@node-minify/cli` - CLI for generating minified files for web.
    * `@node-minify/core` - For generating minified files for web.
    * `@node-minify/uglify-es` - Engine for generating minified files for web.
    * `@types/mocha` - Type definitions for Mocha.
    * `@types/node` - Type definitions for Node.
    * `@typescript-eslint/eslint-plugin` - ESLint plugin for typescript.
    * `@typescript-eslint/parser` - ESLint parser for TypeScript.
    * `cross-var` - Used to make NPM task variables work on Linux and Windows.
    * `eslint` - For code linting.
    * `eslint-config-google` - Google default style guide.
    * `eslint-plugin-jsdoc` - JSDoc plugin for ESLint.
    * `eslint-plugin-mocha` - Mocha plugin for ESLint.
    * `mocha` - Mocha test library.
    * `mocha-junit-reporter` - For generating report files for Azure Pipelines.
    * `nyc` - For generating coverage reports.
    * `prettier` - For prettifying code files.
    * `source-map-support` - For generating sourcemaps with TypeScript.
    * `ts-mocha` - For running tests without having to compile TypeScript (uses ts-node).
    * `typescript` - TypeScript compiler.
  * `files` - If your module has more (non-test) files than `index.ts`, include them and all derivatives here.
  * `keywords` - Update this.

I always include a short description of the project here; maybe a quick example
or two.

The following sections are always included with minor changes. Find and replace
`this-module` with the module name.

## Getting Started

`this-module` is a UMD module, so it can be used in Node or on the web. Typings are
included for TypeScript as well.

### Usage in Node.JS

`this-module` is hosted on [npm](https://www.npmjs.com/this-module), so you can install
with:

```bash
npm i this-module
```

To use in code:

```js
import defaultExport from "this-module";

defaultExport();
```

Or:

```js
import {exportA, exportB, exportC} from "this-module";

exportC(exportB(exportA()));
```

### Usage in the Browser

You can embed it (minified) on a webpage with
[RequireJS](https://requirejs.org/). The module is available on
[UNPKG](https://unpkg.com) at https://unpkg.com/this-module:

```html
<script>
  require(["https://unpkg.com/this-module^1.0.0/dist/index.min.js"], function(thisModule) {
    thisModule.exportA();
  });
</script>
```

<!-- Possibly remove if module is single-file -->
_Note_: Importing via the 'bare' url (`https://unpkg.com/this-module`) is not
supported as it breaks references to other required files.

## Usage

Describe usage with examples.

## Contributing

Found a bug? Please,
[submit it here.](https://github.com/iansan5653/this-module/issues)

Pull requests are always welcome, although to increase your chances of your
contribution being accepted, opening an issue and linking to it is always a
good idea.

Pull requests will not be merged unless the Azure Pipelines build succeeds.
This means that all checks must pass and code must be free of lint errors. To
quickly confirm that it will, just run:

```bash
npm run check
```

This checks your formatting, tests, and for TypeScript compiler errors. If the
task doesn't fail, you should be good to go.

### Other Tasks

For your convenience, some other tasks are also provided in the `package.json`:

- `npm run build` - Compiles TypeScript code to JavaScript
- `npm run minify` - Generate minified JavaScript files from compiled files
- `npm run test` - Quickly run tests using TypeScript code without compiling
- `npm run testWithCoverage` - Run tests and generate coverage report
- `npm run lint` - Check code for linting errors
- `npm run check` - Check to ensure code will pass Pipelines checks (see above)
- `npm run format` - Format code using Prettier
