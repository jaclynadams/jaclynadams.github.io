/*
    ./webpack.config.js
*/
const path = require('path');

module.exports = {
  entry: ['./src/index.js'], // './styles/sass/config.scss'], // Need to update to correct entry point
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  watch: true,
  devServer: {
    inline: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
    ]
  }
}
