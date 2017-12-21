process.env.NODE_ENV = 'production'
const path = require('path')
const conf = require('../../build/webpack.prod.conf.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
let Components = require('./components.json')
var entrys = {}
Object.keys(Components).forEach(function (key) {
  entrys[key] = [path.join(__dirname, Components[key])]
})
module.exports = merge(conf, {
  entry: entrys,
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
