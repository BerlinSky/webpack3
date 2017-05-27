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
### Clean up the "dist" folder

### Next up: add support for images 

### Steps:
1. Update webpack.config.js to use 'clean-webpack-plugin
2. Install the clean-up plugin
```
npm i clean-webpack-plugin -D
```
3. Update "build" command in package.json
```
"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack"
},
```
4. Create a build "npm run build" to verify
