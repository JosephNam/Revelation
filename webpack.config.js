const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, './views/public/javascripts/'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: [/\.js?$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}

