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
### Add support for images 
### Add support for pug 
### Add application favicon 
### Add Webpack Tree Shaking

### Next up: add support for pug (option #2)
### Next up: add support for multiple files
### Next up: add support for production


### Steps:
1. Update webpack.config.js 
```
[ 'es2015', { modules: false } ],
```

2. Add an extra function in helper.js
```
export const extraOnTheTree = () => {
  console.log('I can let it go.');
}
```
3. The new function is never imported / used

4. Run "npm start" to see it is being labeled as "unused" in the compiled JS file
```
unused harmony export extraOnTheTree
```
5. Rum "npm run build" to verify that the function is removed from the compiled JS file