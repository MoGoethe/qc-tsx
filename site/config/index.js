// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  dev: {
    env: require('./dev.env'),
    port: 7000,
    autoOpenBrowser: true,
    assetsSubDirectory: '/site/static/',
    assetsPublicPath: '/site/',
    cssSourceMap: false
  }
}
