import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import highlight from 'highlight.js';
// 按需导入element.js
import './utils/element'
// 按需引入 echarts 5.x
import echarts from './utils/echarts'

Vue.prototype.$echarts = echarts

Vue.use(highlight);
Vue.config.productionTip = false

//封装成一个指令
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    // highlight.highlightBlock(block) 已过时将要被移除
    highlight.highlightElement(block)
    // 从这开始是设置行号
    block.innerHTML = `<ol><li>${block.innerHTML.replace(
      /\n/g,
      `</li><li class="line">`
    )}</li></ol>`;
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')