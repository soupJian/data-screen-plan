# 渲染markdown并高亮展示/展示行号

## 安装插件

```javascript
npm install marked highlight --save

// marked 用来解析 md字符串
// highlight 高亮代码
```

### 封装 v-highlight 自定义指令

```javascript
//封装成一个指令
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    // highlight.highlightBlock(block) 已过时将要被移除
    highlight.highlightElement(block)
  })
})
```

### main.js使用

```javascript
import highlight from 'highlight.js';
Vue.use(highlight);
```

### axios读取md文件，界面渲染使用

**html**

```html
 <div class="dashboard">
    <div v-highlight v-html="htmlMD" class="markdown"></div>
  </div>
```

**js**

```javascript
  // 引入样式
  import "highlight.js/styles/darcula.css";
  import marked from 'marked';
  import {
    readMd
  } from '@/services/readMd.js'
  export default {
    data() {
      return {
        htmlMD: ''
      }
    },
    methods: {
      fetchMdDocument() {
        readMd().then(res => {
          this.htmlMD = marked(res)
        })
      }
    },
    mounted() {
      this.fetchMdDocument()
    }
  }
```

## 行号显示**

### 利用ol有序列表进行展示

修改自定义指令 v-highlight

```javascript
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
```

### 增加样式

```css
.hljs ol {
    margin: 0 0 0 35px;
    padding: 0;
    list-style-type: decimal;
  }

  .hljs ol li {
    padding-left: 10px;
    color: #abb2bf;
    white-space: pre;
    list-style-position: outside;
    border-left: 1px solid #c5c5c5;
  }
```
