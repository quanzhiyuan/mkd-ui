require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const path = require('path')
const chalk = require('chalk')
const components = require('../../components.json')
const existsSync = require('fs').existsSync
const webpack = require('webpack')

let componentPaths = []
delete components.font

Object.keys(components).forEach(key => {
  const filePath = path.join(__dirname, `../../packages/${key}/webpack.conf.js`)
  if (existsSync(filePath)) {
    componentPaths.push(`../../packages/${key}/webpack.conf.js`)
  }
})
const spinner = ora('building for production...' + '\n\n')
spinner.start()
componentPaths.forEach(function(webpackConfigFile) {
  let webpackConfig = require(webpackConfigFile)
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    console.log(chalk.cyan(webpackConfigFile + '  Build complete.\n'))
  })
})
spinner.stop()
console.log(chalk.cyan('  Build complete.\n'))
