// const CopyWebpackPlugin = require('copy-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?'./' : '/',
  productionSourceMap: false, // 生产打包时不输出map文件，增加打包速度
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch'),
    config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
      {
        // Languages are loaded on demand at runtime
        languages: ['javascript']
      }
    ])
  },
  // configureWebpack: {
  //   plugins: [
  //       new MonacoWebpackPlugin()
  //   ]
  // },
}