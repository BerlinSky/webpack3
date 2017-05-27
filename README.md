## Webpack 2 - Basic
### Use webpack-dev-server for development
### Use webpack.config.js
### Generate source-map for SCSS 
### Compile SCSS without importing it from index.js
### Add support for eslint
### Add support for babel preset 2017
### Add JS source-map
### Customize port and start webpack-dev-server
### Use the third party library, such as jquery and Clean up the "dist" folder
### Add support for html templating

### Next up: add support for images 

### Steps:
1. Update webpack.config.js to use 'html-webpack-plugin'
2. Install the html plugin
```
npm i html-webpack-plugin -D
```
3. Move 'index.html" from the root folder to "app" folder
4. Remove the "publicPath from webpack.config output 
```
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js',
  // publicPath: '/dist'
},
```
