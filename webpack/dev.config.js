const path = require('path')
const webpack = require('webpack')
const baseConf = require('./base.config')

let webpackConf = {
  entry: {
    index: path.resolve(__dirname, '../public/index.js')
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      baseConf.module.rules.babel,
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, '../public')],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: baseConf.resolve,
  devtool: 'source-map',
  context: path.join(__dirname, '../public'),
  stats: 'errors-only',
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    compress: true,
    port: 9003,
    historyApiFallback: true,
    https: false,
    noInfo: true
  },
  mode: 'development',
  plugins: [
    baseConf.plugins.define
  ]
}

module.exports = webpackConf
