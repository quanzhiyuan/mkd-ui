process.env.NODE_ENV = 'production'
const path = require('path')
const conf = require('../../build/webpack.prod.conf.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var merge = require('webpack-merge')

module.exports = merge(conf, {
  entry: {
    index: path.join(__dirname, 'index.js')
  },
  output: {
    path: path.join(__dirname, '../../lib/index-list'),
    filename: '[name].js'
  },
  // extract css into its own file
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    })
  ]
})
