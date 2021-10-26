const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?'./' : '/',
  productionSourceMap: false, // 生产打包时不输出map文件，增加打包速度
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'node_modules/monaco-editor/min/vs',
          to: 'vs',
        }
      ])
    ]
  }
}