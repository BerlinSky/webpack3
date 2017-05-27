## Webpack 2 - Basic
### Use webpack-dev-server for development
### Use webpack.config.js
### Generate source-map for SCSS 
### Compile SCSS without importing it from index.js
### Next up: babel preset 2017

### Steps:
1. Remove the statement "import './sass/main.scss';" from index.js
2. Add an main.scss and its path to the entry module of the webpack.config.js
```
  entry: {
    index: [
      path.resolve(__dirname, 'app/index.js'),
      path.resolve(__dirname, 'app/sass/main.scss')
    ]
  },
```
3. Rename "build:prod" to "build" command in package.json


