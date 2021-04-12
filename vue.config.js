module.exports = {
  pluginOptions: {
    i18n: {
      locale: undefined,
      fallbackLocale: undefined,
      localeDir: undefined,
      enableLegacy: undefined,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/_variables.scss";`
      }
    }
  }

}
