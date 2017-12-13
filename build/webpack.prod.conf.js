const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const Components = require('../components.json')
const dependencies = require('../package.json').dependencies
let externals = {}
let pkg = {}
Object.keys(Components).forEach(function(key) {
  externals[`mkd/packages/${key}/index.js`] = `mkd/lib/${key}`
  externals[`mkd/packages/${key}/style.css`] = `mkd/lib/${key}/style.css`
})
Object.keys(dependencies).forEach(function(key) {
  externals[key] = key
  pkg[key] = key
})
exports.externals = Object.assign({
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}, externals)
exports.pkg = Object.assign({
  vue: 'vue'
}, pkg)


const env = config.build.env
let webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  externals: externals,
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   sourceMap: false
    // }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ]
})
module.exports = webpackConfig