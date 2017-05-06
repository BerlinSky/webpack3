var path = require('path');

module.exports = {
  entry: './app/index.js',

  devtool: "cheap-module-eval-source-map",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
  },

  module: {
    rules: [{
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
    }]
  },

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
