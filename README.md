## Webpack 2 - Basic

### Use webpack-dev-server for development
### Use webpack.config.js
### Preprocess SCSS 

### Steps:
1. Install the following 
  ```
  npm i node-sass -D
  npm i extract-text-webpack-plugin -D
  ```
2. Update webpack.config: multiple places for sass preprocess
3. Update package.json to rename "build:dev" to "start"
  ```
  "start": "webpack-dev-server",
  ```
4. Update index.html to add back the css link
  ```
  <link rel="stylesheet" href="dist/main.css">
  ```

Update index.js to use arrow function
  ```
  const siteSetup = () => {
    console.log("Set up ... in arrow function now")
  }
  ```
