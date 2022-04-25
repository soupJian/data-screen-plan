// const CopyWebpackPlugin = require('copy-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?'./' : '/',
  productionSourceMap: false, // 生产打包时不输出map文件，增加打包速度
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch'),
    config.plugin('monaco-editor').use(MonacoWebpackPlugin,[
      {
        // languages: ['javascript'],
        output: './static/js/monaco-editor'
      }
    ]),
    config.optimization.splitChunks({
      chunks: 'all',
      minSize: 20000,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      maxSize: 0,
      cacheGroups: {
        monacoEditor: {
          chunks: 'async',
          name: 'chunk-monaco-editor',
          priority: 22,
          test: /[\\/]node_modules[\\/]monaco-editor[\\/]/,
          enforce: true,
          reuseExistingChunk: true,
        },
        echarts: { // split echarts libs
          name: 'chunk-echarts',
          test: /[\\/]node_modules[\\/]_?echarts(.*)/,
          priority: 40,
          chunks: 'async',
          reuseExistingChunk: true
        },
        elementUI: {
          // 将elementUI拆分为单个包
          name: 'chunk-elementUI',
          // 重量需要大于libs和app，否则将打包到libs或app中
          priority: 20,
          // 为了适应cnpm
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/
        },
      }
    })
  },
  // configureWebpack: {
  //   plugins: [
  //       new MonacoWebpackPlugin()
  //   ]
  // },
}