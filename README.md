## Webpack 2 - Basic

### Use webpack-dev-server for development
### Use webpack.config.js
### Preprocess SCSS 
### Next up: PostCss with Autoprefixer

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
5. Update index.js to import main.scss
  ```
  import './sass/main.scss';

  import { helpMe } from './helper';
  ```
6. Create scss files in new "sass" folder

