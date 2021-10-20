import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import highlight from 'highlight.js';
import './utils/element'
// 编辑器语法高亮
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
// 查找功能
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';

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