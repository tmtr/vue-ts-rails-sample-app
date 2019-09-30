const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const { VueLoaderPlugin } = require('vue-loader')
const { resolve } = require('path')
const vue = require('./loaders/vue')
const pug = require('./loaders/pug')

environment.config.merge({
  resolve: {
    alias: {
      '@': resolve('app/javascript')
    }
  }
})

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.loaders.prepend('pug', pug)
environment.loaders.prepend('typescript', typescript)
module.exports = environment
