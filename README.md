## Webpack 2 - Basic
### Use webpack-dev-server for development
### Use webpack.config.js
### Generate source-map for SCSS 
### Compile SCSS without importing it from index.js
### Add support for eslint
### Add support for babel preset 2017
### Add JS source-map
### Customize port and start webpack-dev-server
### Use the third party library, such as jquery

### Next up: add support for images 

### Steps:
1. Update webpack.config.js
  ```
  const providerPlugin = new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
  ```
  ```
  plugins: [
    extractPlugin,
    providerPlugin,
    uglifyJsPlugin
  ],
  ```
2. Install jquery to the runtime dependencies
```
npm i jquery -S
```
3. Import jquery in index.js
```
import 'jquery';
```
4. Reference and use jquery in index.js
```
const testjQuery = () => {
  const thisBody = $('body');
  thisBody.css({ 'color': '#fff' })
}
```
4. start dev server "npm start" to verify
