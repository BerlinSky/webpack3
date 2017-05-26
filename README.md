## Webpack 2 - Basic

### Use webpack-dev-server for development
### Use webpack.config.js
### Use Babel

### Steps:
1. Update package.json
  ```
  "build:dev": "webpack-dev-server",
  "build:prod": "webpack -p"
  ```
2. Install the following 
  ```
  npm i babel-core -D
  npm i babel-loader -D
  npm i babel-preset-es2015 -D
  ```
3. Update helper.js to use arrow function
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
