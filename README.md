## Webpack 2 - Basic
### Use webpack-dev-server for development
### Use webpack.config.js
### Generate source-map for SCSS 
### Compile SCSS without importing it from index.js
### Add support for eslint
### Add support for babel preset 2017
### Add JS source-map
### Next up: customize port and start webpack-dev-server

### Next up: jquery

### Steps:
1. Update webpack.config.js
  ```
  devServer: {
    host: 'localhost',
    port: 7000,
    open: true,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
  ```
2. Start the dev server with "run start"
3. Update JS to see the changes
4. Update SCSS to see the changes
