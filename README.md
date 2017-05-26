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
2. Update helper.js to use arrow function
  ```
  export const helpMe = () => {
    console.log('Helper is here... in arrow function now');
  }
  ```
4. Update index.js to use arrow function
  ```
  const siteSetup = () => {
    console.log("Set up ... in arrow function now")
  }
  ```
