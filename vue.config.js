module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'JMaker',
    },
  },
  devServer: {
    port: 3001,
    open: true,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/scss/helpers/variables.scss";
          @import "~@/assets/scss/helpers/mixins.scss";
          @import "~@/assets/scss/helpers/functions.scss";
        `,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '@/assets/img',
      },
    },
  },
  pwa: {
    name: 'JMaker',
    themeColor: '#4e626b',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    workboxOptions: {
      exclude: [/\.map$/, /_redirects/],
    },
  },
};
