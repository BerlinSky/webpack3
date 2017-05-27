## Webpack 2 - Basic
### Use webpack-dev-server for development
### Use webpack.config.js
### Generate source-map for SCSS 
### Compile SCSS without importing it from index.js
### Add support for eslint

### Next up: babel preset 2017

### Steps:
1. Update webpack.config.js
  ```
  {
    loader: 'eslint-loader'
  }
  ```
2. Add an unused varible in helper.js
  ```
  const x = 'new Value';
  ``
3. Run "npm start" to see an Error message for "no-unused-vars"
  ```
  error  'x' is assigned a value but never used  no-unused-vars
  ```
4. Update the helper.js to ignore the error by adding a comment line:
```
// eslint-disable-next-line no-unused-vars
```
5. Run "npm start" again to compile successfully without an error.