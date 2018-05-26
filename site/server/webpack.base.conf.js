var path = require('path')
var utils = require('./utils')
var config = require('../config')
var reactLoaderConfig = require('./react-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: ['babel-polyfill','./site/src/app.js']
  },
  output: {
    path: '/site',
    filename: '[name].js',
    publicPath: '/site/public'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json','.ts','.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [resolve('site/src'), resolve('tests')]
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        include: [resolve('site/src'), resolve('tests')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
