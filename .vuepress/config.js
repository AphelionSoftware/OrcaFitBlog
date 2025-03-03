// See more in https://github.com/ktquez/vuepress-theme-ktquez#configuration
const path = require('path')
const head = require('./config/head')
const themeConfig = require('./config/themeConfig')
const resolve = pathName => path.join(__dirname, pathName)

module.exports = {
  theme: 'vuevg',
  head,
  themeConfig,
  base: '/',
  title: `Orca Fit`,  
  ga: `MY TRACKING CODE GOOGLE ANALYTICS`,
  evergreen: true,  // For modern browsers
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'en'
    }
  },
  configureWebpack () {
    return {
      resolve: {
        alias: {
          '@public': resolve('./public')
        }
      }
    }
  }
}
