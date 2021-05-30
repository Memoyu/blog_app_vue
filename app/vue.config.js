module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.txt$/i,
          use: 'raw-loader',
        },
      ],
    },
  },
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@/assets/styles/_variable.scss";`
        }
      }
    }
  }