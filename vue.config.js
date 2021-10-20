const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?'./' : '/',
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