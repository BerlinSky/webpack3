## Webpack 2 - Basic

### Use webpack-dev-server for development
### Use webpack.config.js
### PGenerate source-map for SCSS 
### Next up: ????

### Steps:
Update webpack.config.js to enable sourceMap for CSS loaders
  ```
  use: [
    { 
      loader: "css-loader",
      options: {
        sourceMap: true
      } 
    }, 
    { 
      loader: "postcss-loader",
      options: {
        sourceMap: 'inline'
      } 
    }, 
    { 
      loader: "sass-loader", 
      options: {
        sourceMap: true
      }
    }
  ]

  ```


