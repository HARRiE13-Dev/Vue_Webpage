// vue.config.js

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    devtool: 'source-map'
  }
};

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? '/csmju-frontend/': '/'
// }