<template>
  <div id="app">
    <header>
      <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="logo" disabled class="logo"><span @click="handleToHome()">数据可视化</span></el-menu-item>
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="document">文档</el-menu-item>
        <el-menu-item index="example">示例</el-menu-item>
      </el-menu>
    </header>
    <router-view />
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    methods: {
      handleSelect(key) {
        const arr = this.$route.path.split('/')
        if (key === arr[1]) {
          return false
        }
        this.$router.push(`/${key}`)
        this.$store.commit('home/setActiveKey', `${key}`)
      },
      handleToHome() {
        if (this.activeIndex === 'home') { // 如果已经是首页 点击logo 取消事件
          return false
        } else { // 如果不是首页 点击logo 取消事件
          this.$router.push(`/home`)
          this.$store.commit('home/setActiveKey', `home`)
          return false
        }
      }
    },
    computed: {
      ...mapState({
        activeIndex: state => state.home.activeKey
      }),
      path(){
        return this.$route.path
      }
    },
    watch:{
      path(){
        const arr = this.path.split('/')
        this.$store.commit('home/setActiveKey', arr[1])
      }
    }
  }
</script>

<style lang="less">
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #app {
    width: 100vw;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: auto;
    z-index: 10;
  }

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

  header {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }

  .el-menu {
    max-height: 61px;
    overflow: hidden;
  }

  .el-menu.el-menu--horizontal {
    border-bottom: 2px solid rgb(84, 92, 100) !important;
  }

  .logo {
    cursor: pointer !important;
    width: 200px;
    opacity: 1 !important;
    text-align: center;
    font-size: 20px !important;
    font-weight: 600;
    letter-spacing: 2px;
  }
</style>