module.exports = {
    // 不生成map
    productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'api': '@/api',
        'views': '@/views',
      }
    }
  },
  // // 打包之后的地址 使用相对路径
  // publicPath: './',
  // // 不生成map
  // productionSourceMap: false,
  // configureWebpack: {
  //   externals:
  //     process.env.NODE_ENV === 'production'
  //       ? {
  //           vue: 'Vue',
  //           'vue-router': 'VueRouter',
  //           vuex: 'Vuex',
  //           axios: 'axios'
  //         }
  //       : {}
  // }
}
