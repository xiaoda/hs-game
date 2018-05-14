const path = require('path')
const webpack = require('webpack')
const baseConf = require('./base.config')

let webpackConf = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../'),
    publicPath: '/',
    library: 'HS_GAME',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      baseConf.module.rules.babel
    ]
  },
  resolve: baseConf.resolve,
  devtool: 'source-map',
  stats: 'errors-only',
  mode: 'production',
  plugins: [
    baseConf.plugins.define
  ]
}

module.exports = webpackConf
