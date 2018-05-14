const path = require('path')
const webpack = require('webpack')

let baseConf = {
  module: {
    rules: {
      babel: {
        test: /\.js?$/,
        include: [path.resolve(__dirname, '../src')],
        loader: 'babel-loader'
      }
    }
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '../src')],
    extensions: ['.js', '.json']
  },
  plugins: {
    define: new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  }
}

module.exports = baseConf
