const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: "/banki-test/",

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/style/variables.scss";`
      }
    }
  }
})
