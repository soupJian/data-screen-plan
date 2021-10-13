<template>
  <div class="dashboard">
    <div v-highlight v-html="htmlMD" class="markdown"></div>
  </div>
</template>
<script>
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
</script>
<style lang="less" scoped>
  .dashboard {
    padding: 0 20px;
  }
</style>