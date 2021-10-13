<template>
  <div class="dashboard">
    <div v-highlight v-html="htmlMD" class="markdown"></div>
  </div>
</template>
<script>
  // 引入样式
  import {Loading} from 'element-ui'
  import "highlight.js/styles/darcula.css";
  import marked from 'marked';
  import {
    readMd
  } from '@/services/readMd.js'
  export default {
    data() {
      return {
        htmlMD: '',
        loadingOption:{
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
          setTimeout(()=>{
            loading.close()
          },500)
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
        this.fetchMdDocument()
      }
    }
  }
</script>
<style lang="less" scoped>
  .dashboard {
    padding: 0 20px;
  }
</style>