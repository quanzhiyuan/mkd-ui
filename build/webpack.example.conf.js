var baseWebpackConfig = require('./webpack.base.conf.js')
var config = require('../config')
var utils = require('./utils')
var merge = require('webpack-merge')
var path = require('path')
var webpack =  require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var env = config.build.env
module.exports = merge({
  entry: {
    app: './example/entry.js'
  },
  output: {
    path: path.join(__dirname, '../example/dist'),
  },
  resolve: baseWebpackConfig.resolve,
  module: baseWebpackConfig.module,
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    'fastclick': 'FastClick'
  },
  plugins: [
    new HtmlWebpackPlugin({
     filename: 'index.html',
     template:  path.join(__dirname, '../example/index.html'),
     inject: true
   }),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../example/assets'),
        to: path.resolve(__dirname, '../example/dist/static/assets'),
        toType: 'dir'
      }
    ])
  ]
},
{
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  }
})
