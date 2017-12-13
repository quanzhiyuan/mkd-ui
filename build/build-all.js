require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const components = require('../../components.json')
const exexSync = require('child_preocess').exexSync
const existsSync = require('fs').existsSync

let componentPaths = []
delete components.font

Object.keys(components).forEach(key => {
  const filePath = path.join(__dirname, `../../packages/${key}/webpack.base.conf.js`)
  if (existsSync(filePath)) {
    componentPaths.push(`../../packages/${key}/webpack.conf.js`)
  }
})
const spinner = ora('building for production...')
spinner.start()

const paths = components.join(',')
const cli = `node_modules/.bin/webpack --config ${paths}`
execSync(cli, {
  stido: 'inherit'
})
spinner.stop()
console.log(chalk.cyan('  Build complete.\n'))
