const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const config = {
  entry: './app/index.js',

  devtool: "cheap-module-eval-source-map",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'es2017'],
              plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread']
            }
          },
          {
            loader: 'eslint-loader'
          }]
      },
      {
        test: /\.scss$/,
          use: extractSass.extract({
            use: [
              {
                // translates CSS into CommonJS
                loader: "css-loader", options: {
                  importLoaders: 1,
                  sourceMap: true
                }
              },
              {
                // apply auto-prefixer
                loader: "postcss-loader",
              },
              {
                // compiles Sass to CSS
                loader: "sass-loader", options: {
                  sourceMap: true
                }
              }],
              // use style-loader in development
              // creates style nodes from JS strings
            fallback: "style-loader"
          })
      }]
  },

  plugins: [
    extractSass
  ],

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
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
  config.devtool = ""; // No sourcemap for production

  // Add more configuration for production here like
  // SASS & CSS loaders
  // Offline plugin
  // Etc,
}

module.exports = config;
