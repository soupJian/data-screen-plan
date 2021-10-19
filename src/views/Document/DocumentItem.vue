<template>
  <div class="markdown-wrap" ref="markdownWrap">
    <div v-highlight v-html="htmlMD" class="markdown"></div>
  </div>
</template>
<script>
  // 引入样式
  import {
    Loading
  } from 'element-ui'
  import "highlight.js/styles/darcula.css";
  import marked from 'marked';
  import {
    readMd
  } from '@/services/readMd.js'
  export default {
    data() {
      return {
        htmlMD: '',
        loadingOption: {
          target: '.markdown-wrap',
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        }
      }
    },
    methods: {
      fetchMdDocument() {
        const loading = Loading.service(this.loadingOption)
        readMd(this.textId).then(res => {
          this.htmlMD = marked(res)
          setTimeout(() => {
            loading.close()
          }, 500)
        }).catch(() => {
          loading.close()
          this.$message({
            message: '获取文档失败或者文档不存在'
          })
        })
      }
    },
    computed: {
      textId() {
        return this.$route.params.textId
      }
    },
    mounted() {
      this.fetchMdDocument()
    },
    watch: {
      textId() {
        this.htmlMD = ''
        // 切换文档 滚动到顶部
        this.$refs.markdownWrap.scrollTop = 0
        this.fetchMdDocument()
      }
    }
  }
</script>
<style lang="less" scoped>
  .markdown-wrap {
    padding: 0 20px;
    /deep/.el-loading-spinner{
      top: 50vh !important;
    }
  }
</style>