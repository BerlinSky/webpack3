## Webpack 2 - Basic
### Use webpack-dev-server for development
### Use webpack.config.js
### Generate source-map for SCSS 
### Compile SCSS without importing it from index.js
### Add support for eslint
### Add support for babel preset 2017

### Next up: JS source-map

### Steps:
1. Update webpack.config.js
  ```
 {
    loader: 'babel-loader',
    options: {
      presets: ['es2015', 'es2017'],
      plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread']
    }
  },
  ```
2. Create a new JS file, "use-async.js" 
3. Import and invoke the aync method in index.js
4. Run "npm" to install babel plugins and preset
  ```
  npm i babel-preset-es2017 -D
  npm i babel-plugin-transform-class-properties -D
  npm i babel-plugin-transform-decorators-legacy -D
  npm i babel-plugin-transform-object-rest-spread -D
  npm i babel-plugin-transform-runtime -D
  ``